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
              q-field(:count="8" helper="Some helper" :error="error"
        error-label="Oops, we got an error."
        :warning="warning"
        warning-label="Hey, we got a warning.")
                q-input(v-model="form.username" stack-label="Nome" size="15")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.lastName" stack-label="Sobrenome" size="10")
          div.q-mb-sm.q-mr-lg
            .col
            q-input(v-model="form.email" stack-label="E-mail" type="email" size="15")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.matriculation" stack-label="Matrícula" size="12")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.password" type="password" float-label="Password" stack-label="Senha" size="15")
          div.q-mb-sm.q-mr-lg
            .col
              q-input(v-model="form.password2" type="password" float-label="Password" stack-label="Confirmar Senha" size="5")
        center
          .row.q-mt-lg
            .col
              q-btn(label="Salvar" @click="addUser").bg-huv
            .col
              q-btn(label="Cancelar" @click="cancel" color="red-6")

</template>
<style <style scoped>
.maximo-cad{
  max-width: 600px;
}
.meio-cad{
  margin-top:10%;
  margin-bottom: 10%
}
.bg-huv{
  background-color: rgb(13, 187, 138);
  color: white
}
</style>
<script>
import { validationMixin } from 'vuelidate'
import { email, required } from 'vuelidate/lib/validators'
import { ref } from '../plugins/firebase'
export default {
  mixins: [validationMixin],
  data () {
    return {
      form: {
        username: '',
        lastName: '',
        matriculation: '',
        password: '',
        password2: '',
        email: '',
        group: 'colaborador'
      }
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
      },
      matriculation: {
        required
      }
    }
  },
  computed: {
  },
  methods: {
    signUp () {
      this.$auth.createUserWithEmailAndPassword(this.form.email, this.form.password).then(
        (user) => {
        },
        (err) => {
          alert('Oops.' + err.message)
        }
      )
    },

    addUser () {
      console.log(this.form)
      if (this.$v.form.email.required && this.$v.form.email.email) {
        if (this.form.matriculation.length > 5) {
          this.form.group = 'aluno'
        }
        this.signUp()
        ref.push(this.form)
        this.cancel()
      } else {
        if (!this.$v.form.email.required) {
          this.$q.dialog({
            title: 'Erro',
            message: 'e-mail é obrigatório!'
          })
        } else if (!this.$v.form.email.email) {
          this.$q.dialog({
            title: 'Erro',
            message: 'e-mail inválido!'
          })
        }
      }
    },
    cancel () {
      this.$router.push('/login')
    }
  }
}
</script>
