<template>
  <div class='container'>
    <div>
      <button @click="active = 'compAddPlayer'"> Add players </button>
    </div>
  </div>
</template>

<script>
  import compAddPlayer from './Components/AddPlayer.vue';
  
  export default {
    data() {
      return {

      }
    },
    components: {
      compAddPlayer
    }

  }
</script>

<style lang="scss">
  body {
    padding:0;
    margin:0;
  }
  .container {
    box-sizing: border-box;
    padding: 20px;
  }
</style>
