<template>
  <div class='wrapper'>
    <h3>List of Players</h3>
    <div
      class='player'
      v-for='(player,index) in players'
      :key='index'
      >
      <div>Name: {{player.name}}</div>
    <div>Lastname: {{player.lastname}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        players: []
      }
    },
    // created(){
    //   this.$http.get('players.json')
    //   .then( response => response.json())
    //   .then( data => {
    //     let list = [];
    //        for( let key in data ){
    //         list.push({
    //           ...data[key],
    //           id: key
    //         })
    //       }
    //     this.players = list
    //   })
    // }
    created() {
    //let list = [];
    // let id = this.$route.params.id;
    this.$store.dispatch('getPost', this.players)
    }
  }
</script>

<style>
h3 {
  color: black;
}

.player {
  width: 300px;
  padding: 15px;
  border: 1px solid black;
  background-color: orange;
}
</style>
