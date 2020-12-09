<template>
  <div>
    <h3>Add player</h3>
    <div class='form-group'>
      <label>Player's name</label>
      <input class='form-control' type='text' v-model='player.name'>
    </div>
    <div class='form-group'>
      <label>Player's lastname</label>
      <input class='form-control' type='text' v-model='player.lastname'>
    </div>
    <button @click='addPost'>Add</button>
  <div v-if='addpost'>
    You added the player!
  </div>
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
    computed: {
      addpost() {
        let status = this.$store.getters['addPostStatus'];
        return status
      }
  } ,
    methods: {
      addPost() {
        this.$store.dispatch('addPost', this.player)
      }
    }
  }
</script>

<style>
h3 {
  color: black;

}
</style>
