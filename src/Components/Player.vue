<template>
  <div class='container-player'>

    <div class='container-wrapper'>
      <ul>
        <li class='link-player'>
          <router-link class='item-player' to='/player/list_of_players'>List of players</router-link>
        </li>
        <li class='link-player'>
          <router-link class='item-player' to='player/add_player'>Add player</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
 export default {

}
</script>

<style>
.container-player {
  text-align: center;
  padding: 30px;
}

.container-wrapper {
  border-bottom: 2px solid black;
}
.link-player {
  display: inline;
  background-color: red;
  margin: 20px;
  padding: 10px;
  font-size: 24px;
  text-transform: uppercase;

}

.item-player {

}
</style>
