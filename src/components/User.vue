<template>
  <li class="userBody">
    <span>{{ user.username }}</span>
  </li>
</template>

<script>
export default {
  name: "user-component",
  props: {
    user: {
      type: Object,
    },
  },
  setup() {},
};
</script>

<style>
.userBody {
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 5px;
}
</style>
