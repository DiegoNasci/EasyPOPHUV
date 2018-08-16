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
              q-input(v-model="form.nome" stack-label="Nome" size="15")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.sobrenome" stack-label="Sobrenome" size="10")
          div.q-mb-sm.q-mr-lg
            .col
            q-input(v-model="form.email" stack-label="E-mail" type="email" size="15")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.username" stack-label="Matrícula" size="12")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.password" type="password" float-label="Password" stack-label="Senha" size="15")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.password2" type="password" float-label="Password" stack-label="Confirmar Senha" size="5")
        center
          .row.q-mt-lg
            .col
              q-btn(label="Salvar" @click="salvar").bg-huv
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
</style>
<script>
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
        grupo: '',
        ativo: true,
        nome: '',
        sobrenome: ''
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
    salvar () {
      this.$db.ref('users').push(this.form)
      this.cancelar()
    },
    cancelar () {
      this.limparForm()
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
    }
  }
}
</script>
