<template>
  <router-link to="/" class="router-link">Home</router-link>
  <router-link to="/favorites" class="router-link">Favorites</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style>
body {
  background-color: #2e3042;
}
h1 {
  text-align: center;
  color: aliceblue;
}
.d-flex {
  display: flex;
}
.router-link {
  margin-right: 10px;
  color: aliceblue;
  font-weight: bold;
}
</style>
