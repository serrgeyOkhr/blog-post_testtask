<template>
  <nav>
    <router-link to="/">Posts</router-link> |
    <router-link to="/users">Users</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}
</style>
