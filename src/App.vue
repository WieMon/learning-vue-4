<template>
  <div class='container'>
    <div>
      <button @click="active = 'compPlayer'">Players</button>
      <button @click="active = 'compAddPlayer'">Add players</button>
    </div>
    <div>
      <component :is='this.active'></component>
    </div>
  </div>
</template>

<script>
  import compPlayer from './Components/Player.vue';
  //import compAddPlayer from './Components/AddPlayer.vue';

  export default {
    data() {
      return {
        active: 'compPlayer'
      }
    },
    components: {
      compPlayer,
      //compAddPlayer
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
