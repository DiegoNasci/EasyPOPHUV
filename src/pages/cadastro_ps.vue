<template lang="pug">
div.bg-huv.window-height.window-width
  .row.justify-center.items-center
    q-card.bg-white.q-ma-sm.q-pa-xl.shadow-5.maximo-cad.meio-cad
      h3.text-center.flex.flex-center.text-grey-9
        |Cadastro de Colaborador ou Aluno
        .row.justify-center
          .col-10.col-md-5.q-mb-sm.q-mr-lg
            q-input(v-model="form.username" stack-label="Nome")
          .col-10.col-md-5.q-mb-sm.q-mr-lg
            q-input(v-model="form.lastName" stack-label="Sobrenome")
          .col-10.col-md-5.q-mb-sm.q-mr-lg
            q-input(v-model="form.email" stack-label="E-mail" type="email" size="15")
          .col-10.col-md-5.q-mb-sm.q-mr-lg
            q-input(v-model="form.matriculation" stack-label="Matrícula" size="12" type="number")
          .col-10.col-md-5.q-mb-sm.q-mr-lg
            q-input(v-model="form.password" type="password" float-label="Password" stack-label="Senha" size="15")
          .col-10.col-md-5.q-mb-sm.q-mr-lg
            q-input( v-model="confirmPassword" min-length="6" label-width="6" type="password" float-label="Password" stack-label="Confirmar Senha" size="5")
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
        email: '',
        group: 'colaborador'
      },
      confirmPassword: ''
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
      },
      password: {
        required
      }
    },
    confirmPassword: {
      required
    }
  },
  methods: {
    signUp () {
      this.$auth.createUserWithEmailAndPassword(this.form.email, this.form.password).then(
        (user) => {
          ref.push(this.form)
          this.$q.dialog({
            title: 'Parabéns!',
            message: 'Cadastro efetuado com sucesso.'
          })
          this.cancel()
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },

    addUser () {
      if (this.form.matriculation.length > 5) {
        this.form.group = 'aluno'
      }

      if (this.$v.form.username.required) {
        if (this.$v.form.email.required && this.$v.form.email.email) {
          if (this.$v.form.matriculation.required) {
            if (this.form.password.length > 5) {
              if (this.form.password === this.confirmPassword) {
                this.signUp()
              } else {
                this.$q.dialog({
                  title: 'Erro',
                  message: 'Senhas não conferem!'
                })
                this.form.password = ''
                this.confirmPassword = ''
              }
            } else {
              this.$q.dialog({
                title: 'Erro',
                message: 'Senha precisa conter no mínimo 6 caracteres!'
              })
            }
          } else {
            this.$q.dialog({
              title: 'Erro',
              message: 'Matrícula é obrigatória!'
            })
          }
        } else {
          if (!this.$v.form.email.required) {
            this.$q.dialog({
              title: 'Erro',
              message: 'E-mail é obrigatório!'
            })
          } else if (!this.$v.form.email.email) {
            this.$q.dialog({
              title: 'Erro',
              message: 'E-mail inválido!'
            })
          }
        }
      } else {
        this.$q.dialog({
          title: 'Erro',
          message: 'Nome é obrigatório!'
        })
      }
    },
    cancel () {
      this.$router.push('/login')
    }
  }
}
</script>
