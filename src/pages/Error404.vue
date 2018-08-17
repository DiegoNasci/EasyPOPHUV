<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
<<<<<<< HEAD
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
=======
    <p class="text-faded">Desculpe... A página não foi encontrada!<strong>(404)</strong></p>
>>>>>>> deploy/master
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
<<<<<<< HEAD
    >Go back</q-btn>
=======
    >Voltar</q-btn>
>>>>>>> deploy/master
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
