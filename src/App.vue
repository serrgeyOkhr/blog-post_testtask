<template>
  <nav class="header_navigation">
    <router-link to="/" class="link">Посты</router-link>
    <router-link to="/users" class="link">Пользователи</router-link>
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
.header_navigation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
  text-decoration: none;
  color: black;
  padding: 10px 15px;
  border-bottom: 1px solid;
  margin: 0 5px;
}
.link:hover {
  background-color: rgb(214, 214, 214);
}
.router-link-active {
  background: #000;
  color: #fff;
}
.router-link-active:hover {
  background: #000;
}
</style>
