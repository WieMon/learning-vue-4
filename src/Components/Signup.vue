<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h3>Sign up</h3>
        <div class="input_field">
          <label>Email</label>
          <input type="email" v-model="formdata.email"/>
        </div>
        <div class="input_field">
          <label>Password</label>
          <input type="password" v-model="formdata.password" />
        </div>
          <button>
            Sign up
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
    onSubmit() {
      this.$store.dispatch('signup',this.formdata)

    }
  }
}
</script>

<style>
</style>

