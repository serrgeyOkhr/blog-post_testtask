<template>
  <h1>Placeholder Blog</h1>
  <div class="blogContainer">
    <div v-for="(post, index) in posts" :key="index" class="blog_link">
      <PostVue :postData="post" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import PostVue from "@/components/Post.vue";
export default {
  name: "main-page",
  components: {
    PostVue,
  },
  setup() {
    const posts = ref([]);
    getPosts(posts);

    function getPosts(output) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => (output.value = result));
    }
    return { posts };
  },
};
</script>

<style>
.blogContainer {
  display: flex;
  flex-wrap: wrap;
}
.blog_link {
  width: 50%;
}
@media screen and (max-width: 1100px) {
  .blog_link {
    width: 100%;
  }
}
</style>
