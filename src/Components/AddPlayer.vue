<template>
  <div>
  <h3>Game players</h3>
  <div>
  </div>
  <label>Player's name</label>
  <input type='text' v-model='player.name'>
  </div>
   </div>
  <label>Player's lastname</label>
  <input type='text' v-model='player.lastname'>
  </div>
  <button @click='add'>Add</button>
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
