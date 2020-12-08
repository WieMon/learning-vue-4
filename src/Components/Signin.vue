<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2>Sign in</h2>
        <div class='input_field'>
          <label>Email</label>
          <input type='email' v-model='formdata.email'/>
        </div>
        <div class='input_field'>
          <label>Password</label>
          <input type='password' v-model='formdata.password' />
        </div>
        <button>
          Sign in
        </button>
    </form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata:{
        email: '',
        password: ''
      }
    }
    },
    methods: {
      onSubmit () {
        this.$store.dispatch('signin',this.formdata)
        console.log(this.formdata)
      }
    }
  }
</script>

<style>
</style>
