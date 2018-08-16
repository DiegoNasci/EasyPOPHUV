<template lang="pug">
div
  div.bg-huv
    div.flex.flex-center.metade
      h3.q-display-2.flex.flex-center.text-weight-bold.text-white.text-center.metade.texto-meio
        |Bem vindo ao Sistema de Procedimentos Operacionais Padrão (EASY POP HUV)
  div.q-pt-lg.q-pb-lg
    center
      .col-4.q-pb-md
        q-btn(label="Usuário" @click="main").botao.bg-huv
      .col-4
        q-btn(label="Colaborador ou Aluno" @click="login" color="faded").botao
</template>
<style>
.metade{
  height: 400px;
}
.texto-meio{
  max-width: 500px;
}
.botao{
 height: 70px;
 width: 200px;
 border-radius: 5px;
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
    }
  },
  methods: {
    main () {
      this.$router.push('/main')
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
