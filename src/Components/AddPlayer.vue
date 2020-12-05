<template>
  <div>
    <h3>Game players</h3>
    <div class='form-group'>
      <label>Player's name</label>
      <input class='form-control' type='text' v-model='player.name'>
    </div>
    <div class='form-group'>
      <label>Player's lastname</label>
      <input class='form-control' type='text' v-model='player.lastname'>
    </div>
    <button @click='add'>Add</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        player: {
          name: '',
          lastname: ''
        }
      }

    },
    methods: {
     add() {
         this.$http.post('players', this.player)
        .then( response => {
          console.log('response: ', response)
        })
      }
    }
  }
</script>

<style>
</style>
