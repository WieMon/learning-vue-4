<template>
  <header>
    <h3>Game World</h3>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/signin">Sign in</router-link>
        </li>
         <li >
          <router-link >Sign out</router-link>
        </li>
        <li>
          <router-link to="/signup">Sign up</router-link>
        </li>

        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header {
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: brown;
  color: white;
}

h3 {
  font-size: 26px;
}


li {
  list-style: none;
  text-transform: uppercase;
  display: inline;
  margin: 0 20px;
  cursor: pointer;

}

a {
  color: white;
  text-decoration: none;
}
</style>
