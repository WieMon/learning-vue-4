<template>
  <div>
    <h3>List of players</h3>
    <div
      class='player'
      v-for='(player,index) in players'
      :key='index'
      >
    </div>
    <div>Name: {{player.name}}</div>
    <div>Lastname: {{player.lastname}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        players: '',
      }
    },
    methods: {
    //   fetchData(){
    //     this.$http.get('players')
    //     .then( response => {
    //       this.players = response.body;
    //       console.log('response: ',response.body)
    //     })
    //   }
    // },
    // created(){
    //   this.fetchData();
    }
  }
</script>

<style>
  .player {
    width: 300px;
    padding: 15px;
    border: 1px solid black;
    background-color: orange;
  }
</style>
