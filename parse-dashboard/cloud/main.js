const { Pool, Client } = require("pg");

// const connectionString = "postgresql://castelo:castelo@localhost:5432/castelo";
const connectionString = "postgres://postgres:castelo@localhost:5432/castelo"

let Categoria = Parse.Object.extend("Categoria");
let Cliente = Parse.Object.extend("Cliente");
let Produto = Parse.Object.extend("Produto");
let Regra = Parse.Object.extend("Regra");
let Venda = Parse.Object.extend("Venda");
let Festa = Parse.Object.extend("Festa");
let Comanda = Parse.Object.extend("Comanda");

Parse.Cloud.define("buscarComanda", function(request, response) {
  let comandaNumero = request.params.comandaNumero;
  let festaId = request.params.festaId;
});

Parse.Cloud.define("somarComanda", function(request, response) {
  let numero = request.params.numero;
  let festa = request.params.festa;
  let command = `select sum("valorTotal") from "Venda" where comanda = '${numero}' and festa = '${festa}'`;

  const client = new Client({
    connectionString
  });
  client
    .connect()
    .then(() => {
      return client.query(command).then(result => {
        response.success(result.rows[0].sum);
      });
    })
    .catch(err => {
      response.error(err);
    })
    .then(() => {
      return client.end();
    });
});

Parse.Cloud.define("listarVendaParse", function(request, response) {
  let numero = request.params.numero;
  let festa = request.params.festa;
  let query = new Parse.Query(Venda);
  query
    .equalTo("comanda", numero)
    .include("produto")
    .equalTo("festa", Festa.createWithoutData(festa))
    .notEqualTo("cancelado", true)
    .find()
    .then(vendaItens => {
      let result = vendaItens.reduce((group, item) => {
        let produto = item.get("produto");
        let groupItem = group[produto.id];
        if (groupItem) {
          groupItem.quantidade += item.get("quantidade");
          groupItem.valorTotal += item.get("valorTotal");
        } else {
          group[produto.id] = {
            objectId: produto.id,
            nome: produto.get("nome"),
            valorUnitario: item.get("valorUnitario"),
            quantidade: item.get("quantidade"),
            valorTotal: item.get("valorTotal")
          };
        }
        return group;
      }, {});

      let ids = Object.keys(result);

      response.success(
        ids.map(id => {
          return result[id];
        })
      );
    })
    .catch(error => {
      response.error(error);
    });
});

Parse.Cloud.define("listarVenda", function(request, response) {
  let numero = request.params.numero;
  let festa = request.params.festa;

  let command = `select "Produto".nome, count(*) as quantidade, "Venda"."valorUnitario" , sum("Venda"."valorTotal") as valorTotal `;
  command += `from public."Produto" `;
  command += `inner join public."Venda" on "Venda".produto = "Produto"."objectId" `;
  command += `where comanda = '${numero}' and festa = '${festa}' `;
  command += `group by "Produto".nome, "Venda"."valorUnitario"`;

  const client = new Client({
    connectionString
  });
  client
    .connect()
    .then(() => {
      return client.query(command).then(result => {
        response.success(result.rows);
      });
    })
    .catch(error => {
      response.error(error);
    })
    .then(() => {
      return client.end();
    });
});

/*
  delete from public."Venda" where comanda = '1230'
select count(*) from public."Venda" where comanda = '1230'
select sum("valorTotal") from public."Venda" where comanda = '1230'

*/

// UserInfo
Parse.Cloud.define("saveUserRoles", function(request, response) {
  let query = new Parse.Query(Parse.User);
  let userRoles = request.params.userRoles;
  let userID = request.params.objectId;

  query.get(userID, {
    useMasterKey: true,
    success: function(usuario) {
      let regras = usuario.relation("regras");
      if (userRoles.added) {
        regras.add(Regra.createWithoutData(userRoles.key));
      } else {
        regras.remove(Regra.createWithoutData(userRoles.key));
      }

      usuario.save(null, {
        useMasterKey: true,
        success: function(usuario) {
          response.success("Regras alteradas com sucesso");
        },
        error: function(error) {
          response.error("Could not save changes to user.");
        }
      });
    },
    error: function(error) {
      response.error("Could not find user.");
    }
  });
});

// UserInfo
Parse.Cloud.define("getUserInfo", function(request, response) {
  let query = new Parse.Query(Parse.User);
  let objectId = request.params.objectId;
  let userData = {
    objectId: "",
    username: "",
    email: "",
    grupo: "",
    ativo: false,
    matricula: "",
    sobrenome: ""
  };

  query.get(objectId, {
    useMasterKey: true,
    success: function(usuario) {
      userData.objectId = usuario.id;
      userData.username = usuario.getUsername();
      userData.email = usuario.getEmail();
      userData.grupo = usuario.get("grupo");
      userData.ativo = usuario.get("ativo");
      userData.matricula = usuario.get("matricula");
      userData.sobrenome = usuario.get("sobrenome");

      response.success(userData);
    },
    error: function(error) {
      response.error("Could not find user.");
    }
  });
});

// User - Create
Parse.Cloud.define("createUser", function(request, response) {
  let user = new Parse.User();
  user.setUsername(request.params.username);
  user.setPassword(request.params.password);
  user.setEmail(request.params.email);
  user
    .save()
    .then((user) => {
      response.success(user);
    })
    .catch(error => {
      response.error(error.message);
    });
});

// User - Edit
Parse.Cloud.define("editUser", function(request, response) {
  console.log('editUser:' + JSON.stringify(request.params))
  var query = new Parse.Query(Parse.User);
  var objectId = request.params.objectId;
  var username = request.params.username;
  var email = request.params.email;
  var grupo = request.params.grupo;
  var ativo = request.params.ativo;
  var matricula = request.params.matricula;
  var sobrenome = request.params.sobrenome;

  query
    .get(objectId, {
      useMasterKey: true
    })
    .then(usuario => {
      usuario.setUsername(username);
      usuario.setEmail(email);    
      usuario.set("grupo", grupo);
      usuario.set("ativo", ativo);
      usuario.set("matricula", matricula);
      usuario.set("sobrenome", sobrenome);
      return usuario.save(null, {
        useMasterKey: true
      });
    })
    .then(() => {
      response.success("Successfully updated user.");
    })
    .catch(error => {
      response.error(error);
    });
});
