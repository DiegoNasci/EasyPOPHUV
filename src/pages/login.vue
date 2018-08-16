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
            q-input(v-model="user.email" stack-label="E-mail")
          .col-8.col-sm-6.q-pb-md
            q-input(v-model="user.password" type="password" float-label="Password" stack-label="Senha")
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
      user: {
        password: '',
        email: ''
      }
    }
  },
  methods: {
    login () {
      this.$auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
        window.location = '/main'
      }).catch(err => {
        this.$q.dialog({
          title: 'Erro',
          message: 'Erro ao iniciar sessão, email ou senha inválidos! ' + err
        })
      })
    }
  }
}
</script>
