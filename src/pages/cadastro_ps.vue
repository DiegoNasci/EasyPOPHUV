<template lang="pug">
div.bg-huv.window-height.window-width
  .row.justify-center.items-center
    q-card.bg-white.q-ma-sm.q-pa-xl.shadow-5.maximo-cad.meio-cad
      h3.text-center.flex.flex-center.text-grey-9
        |Cadastro de Colaborador ou Aluno
      .form
        .row.flex.flex-center.q-ml-lg
          div.q-mb-sm.q-mr-lg
            .col
<<<<<<< HEAD
              q-input(v-model="form.nome" stack-label="Nome" size="15")
=======
              q-input(v-model="form.username" stack-label="Nome" size="15")
>>>>>>> deploy/master
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.sobrenome" stack-label="Sobrenome" size="10")
          div.q-mb-sm.q-mr-lg
            .col
            q-input(v-model="form.email" stack-label="E-mail" type="email" size="15")
          div.q-mb-sm.q-mr-lg
            .col
<<<<<<< HEAD
              q-input(v-model="form.username" stack-label="Matrícula" size="12")
=======
              q-input(v-model="form.matricula" stack-label="Matrícula" size="12")
>>>>>>> deploy/master
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.password" type="password" float-label="Password" stack-label="Senha" size="15")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.password2" type="password" float-label="Password" stack-label="Confirmar Senha" size="5")
        center
          .row.q-mt-lg
            .col
<<<<<<< HEAD
              q-btn(label="Salvar" @click="salvar").bg-huv
=======
              q-btn(v-if="form.objectId === undefined" label="Criar" @click="criarUsuario").bg-huv
            //- .col
            //-   q-btn(v-if="form.objectId !== undefined" label="Salvar" @click="salvar").bg-huv
>>>>>>> deploy/master
            .col
              q-btn(label="Cancelar" @click="cancelar" color="red-6")

</template>
<style <style scoped>
.maximo-cad{
  max-width: 600px;
}
.meio-cad{
  margin-top:10%;
  margin-bottom: 10%
}
<<<<<<< HEAD
</style>
<script>
=======
.bg-huv{
  background-color: rgb(13, 187, 138);
  color: white
}
</style>
<script>

import Parse from 'parse'
>>>>>>> deploy/master
import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      form: {
        objectId: undefined,
        username: '',
        password: '',
        password2: '',
        email: '',
<<<<<<< HEAD
        grupo: '',
        ativo: true,
        nome: '',
        sobrenome: ''
=======
        sobrenome: '',
        grupo: 'colaborador',
        ativo: true,
        matricula: ''
>>>>>>> deploy/master
      },
      registros: [],
      modoLista: true,
      editarUsuario: false,
      colColor: '#3c294d',
      colunasTabela: [],
      configTabela: {},
      emailMessage: ''
    }
  },
  validations: {
    form: {
      username: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
<<<<<<< HEAD
=======
  created () {
    this.configurarTabela()
  },
  mounted () {
    this.listarUsuarios()
  },
>>>>>>> deploy/master
  computed: {
  },
  methods: {
    emailValid () {
      if (this.$v.form.email.required && this.$v.form.email.email) {
        return true
      } else {
        if (!this.$v.form.email.required) {
          this.emailMessage = 'e-mail é obrigatório'
        } else if (!this.$v.form.email.email) {
          this.emailMessage = 'e-mail inválido'
        }
        return false
      }
    },
<<<<<<< HEAD
    salvar () {
      this.db('users').push(this.form)
      this.cancelar()
    },
    cancelar () {
      this.limparForm()
=======
    configurarTabela () {
      this.colunasTabela = [
        {
          name: 'username',
          label: 'Usuário',
          field: 'username',
          type: 'string',
          sort: true,
          filter: true
        },
        {
          label: 'Nome Completo',
          field: 'nomeCompleto',
          type: 'string',
          sort: true,
          filter: true
        },
        {
          label: 'Grupo',
          field: 'grupo',
          width: '110px',
          type: 'string',
          sort: true,
          filter: true
        }
      ]
    },
    novo () {
      this.limparForm()
      this.modoLista = false
    },
    cancelar () {
      // this.limparForm()
      // this.modoLista = true
>>>>>>> deploy/master
      this.$router.push('/login')
    },
    limparForm () {
      this.editarUsuario = false
      this.form.objectId = undefined
      this.form.username = ''
      this.form.password = ''
      this.form.password2 = ''
      this.form.email = ''
      this.form.grupo = ''
      this.form.ativo = false
      this.form.nome = ''
      this.form.sobrenome = ''
<<<<<<< HEAD
=======
    },
    rowClick (props) {
      let self = this
      let params = {
        objectId: props.row.objectId
      }
      console.log('props.row.objectId:' + props.row.objectId)

      Parse.Cloud.run('getUserInfo', params).then(registro => {
        console.log('registro vale: ' + registro)
        self.form.objectId = registro.objectId
        self.form.username = registro.username
        self.form.email = registro.email
        self.form.grupo = registro.grupo
        self.form.ativo = registro.ativo || false
        self.form.nome = registro.nome
        self.form.sobrenome = registro.sobrenome

        self.editarUsuario = true
        self.modoLista = false
      })
    },
    criarUsuario () {
      let self = this

      if (self.form.password.length > 0 && self.form.password2.length > 0) {
        if (self.form.password !== self.form.password2) {
          this.$q.notify({
            message: 'Senhas estão diferentes.',
            color: 'negative',
            position: 'bottom-left'
          })
          return
        }
      }

      let params = {
        username: self.form.username,
        password: self.form.password,
        email: self.form.email
      }

      Parse.Cloud.run('createUser', params).then(
        result => {
          self.modoLista = true
          this.$q.notify({
            message: 'Usuário criado.',
            color: 'positive',
            position: 'bottom-left'
          })
          console.log('result.id: ' + result.id)
          this.form.objectId = result.id
          this.salvar()
        },
        error => {
          this.$q.notify({
            message: `Erro ao salvar.<br/>${error}`,
            color: 'negative',
            position: 'bottom-left'
          })
        }
      )
    },
    salvar () {
      if (this.form.matricula.length > 5) {
        this.form.grupo = 'aluno'
      }

      let self = this
      console.log('self.form.userid:' + self.form.objectId)
      Parse.Cloud.run('editUser', this.form).then(
        result => {
          self.listarUsuarios()
          self.limparForm()
          self.modoLista = true
          this.$q.notify({
            message: 'Usuário salvo.',
            color: 'positive',
            position: 'bottom-left'
          })
          this.$router.push('/login')
        },
        error => {
          this.$q.notify({
            message: `Erro ao salvar.<br/>${error}`,
            color: 'negative',
            position: 'bottom-left'
          })
        }
      )
    },
    listarUsuarios () {
      let self = this
      self.registros = []
      let Parse = this.$parse
      let query = new Parse.Query(Parse.User)
      query.ascending('username')
      query.find({
        success: function (results) {
          self.registros = results.map(object => object.toJSON())
        },
        error: function (error) {
          this.$q.notify({
            message: 'Error: ' + error.code + ' ' + error.message,
            color: 'negative',
            position: 'bottom-left'
          })
        }
      })
>>>>>>> deploy/master
    }
  }
}
</script>
