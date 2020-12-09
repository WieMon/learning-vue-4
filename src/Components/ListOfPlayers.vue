<template>
  <div class='wrapper'>
    <h3>List of Players</h3>
    <div
      class='player'
      v-for='(post,index) in posts'
      :key='index'
      >
      <div>Name: {{post.name}}</div>
    <div>Lastname: {{post.lastname}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      posts() {
        return this.$store.getters['getAllPosts']
      }
    },
    created() {
    this.$store.dispatch('getAllPosts')
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
