<template>
  <div>
    <h3>List of players</h3>
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
    methods: {

      // fetchData() {
      //   this.$http.get('http://localhost:3004/players')
      //   .then( response => {
      //     this.players = response.body;
      //     console.log('response: ', response.body)
      //   })
      // }
    },
    // created(){
    //    this.$http.get('players.json')
    //       .then( response => response.json())
    //       .then( data => {
    //         let list = [];

    //         for( let key in data ){
    //             list.push({
    //                 ...data[key],
    //                 id: key
    //             })
    //         }
    //         this.players = list
    //       })
    //   //this.fetchData();
    // }
    created(){

          this.$http.get('players.json')
          .then( response => response.json())
          .then( data => {
            let list = [];

            for( let key in data ){
                list.push({
                    ...data[key],
                    id: key
                })
            }
            this.players = list
          })


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
