<template>
  <h1>Placeholder Blog</h1>
  <div class="blogContainer">
    <div class="posts_container">
      <Post v-for="(post, index) in posts" :key="index" :postData="post" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Post from "@/components/Post.vue";
import { fetchData } from "@/options";
export default {
  name: "main-page",
  components: {
    Post,
  },
  setup() {
    const posts = ref([]);
    const PATH_TO_POSTS = "https://jsonplaceholder.typicode.com/posts";
    fetchData(PATH_TO_POSTS, posts);

    return { posts };
  },
};
</script>

<style>
.posts_container {
  display: flex;
  flex-wrap: wrap;
}
</style>
