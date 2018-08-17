<template lang="pug">
div.bg-huv.window-height.window-width
  .row.justify-center.items-center
    q-card.bg-white.q-ma-sm.q-pa-xl.shadow-5.meio
      .row.justify-center.items-center
        div
          .col-8.col-sm-6.q-display-2.maximo.text-center.text-grey-9.q-pb-xl
            |Colaborador ou Aluno, faça o login ou cadastre-se!
        .form.q-pl-lg
          .col-8.col-sm-6.q-pb-md
<<<<<<< HEAD
            q-input(v-model="user.email" stack-label="E-mail")
          .col-8.col-sm-6.q-pb-md
            q-input(v-model="user.password" type="password" float-label="Password" stack-label="Senha")
=======
            q-input(v-model="form.username" stack-label="Matrícula")
          .col-8.col-sm-6.q-pb-md
            q-input(v-model="form.password" type="password" float-label="Password" stack-label="Senha")
>>>>>>> deploy/master
          .col-8.col-sm-6.flex.flex-center
            .col
              q-btn(label="ENTRAR" @click="login" loader).bg-huv
            .col.q-display-3-opacity.text-grey-9
              q-item(@click.native="$router.push('/cps')")
                q-item-main(label="Não tem conta? cadastre-se" )
</template>
<style>
.maximo{
  max-width: 350px;
}
.meio{
    margin-top:15%;
    margin-bottom: 15%
}
.bg-huv{
  background-color: rgb(13, 187, 138);
  color: white
}
</style>
<script>
export default {
  data () {
    return {
<<<<<<< HEAD
      user: {
=======
      form: {
        username: '',
>>>>>>> deploy/master
        password: '',
        email: ''
      }
    }
  },
  methods: {
<<<<<<< HEAD
    login () {
      this.$auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
        window.location = '/main'
      }).catch(err => {
        this.$q.dialog({
          title: 'Erro',
          message: 'Erro ao iniciar sessão, email ou senha inválidos! ' + err
        })
      })
=======
    login (e, done) {
      let self = this
      let Parse = this.$parse

      Parse.User.logIn(self.form.username, self.form.password).then(
        (user) => {
          self.$router.push('/main')
          return true
        },
        (error) => {
          this.$q.notify({
            message: 'Nao foi possivel logar: ' + error,
            color: 'negative',
            position: 'bottom-left'
          })
          return true
        }
      )
>>>>>>> deploy/master
    }
  }
}
</script>
