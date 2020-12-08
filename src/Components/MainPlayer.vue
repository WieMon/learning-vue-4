<template>
  <div>
   <h1>Hello: {{userEmail}}</h1>
  </div>
</template>

<script>
export default {
  computed:{
    userEmail(){
      if(this.$store.state.user){
        return this.$store.state.user.email
      }
    }
  },
  created(){
    let tokenId = this.$store.state.token;
    this.$store.dispatch('getUserInfo',tokenId)
  }
}
</script>

<style>
</style>
