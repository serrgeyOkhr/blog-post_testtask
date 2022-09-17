<template>
  <div class="blog_body" :class="{ reverse: post.id % 2 == 1 }">
    <div class="imgBlok">
      <div class="imgPreloader" v-if="randomImg === ''"></div>
      <img v-else :src="randomImg" alt="" />
    </div>
    <!-- <img src="https://picsum.photos/400/300" alt="" /> -->
    <!-- <pre>{{ randomImg }}</pre> -->
    <div class="blog_info">
      <h3 class="blog_title">{{ post.title }}</h3>
      <button @click="openPost(post.id)">Читать...</button>
    </div>
    <!-- <p>{{ post.body }}</p> -->
  </div>
</template>

<script>
import { ref, toRef } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  name: "post-component",
  props: {
    postData: {
      type: Object,
    },
  },
  setup(props) {
    const post = toRef(props, "postData");
    const router = useRouter();
    post.value.title = capitalizeFirsLetter(post.value.title);
    const randomImg = ref("");

    getRandomImg(randomImg);

    function getRandomImg(output) {
      fetch("https://picsum.photos/600/300").then(
        (response) => (output.value = response.url)
      );
    }

    function capitalizeFirsLetter(string) {
      return string[0].toUpperCase() + string.slice(1);
    }

    function openPost(id) {
      router.push("post/" + id);
    }
    return { post, randomImg, openPost };
  },
};
</script>

<style>
.blog_body {
  display: flex;
  /* justify-content: center; */
  align-items: flex-start;
  border-radius: 15px;
  background-color: rgb(221, 221, 221);
  margin: 10px;
  padding: 10px;
}
.blog_info {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  width: 50%;
}
.imgBlok {
  width: 50%;
}
.imgPreloader {
  display: block;
  width: 100%;
  min-height: 150px;
  background-color: #ccc;
}

@media screen and (max-width: 1100px) {
  .reverse {
    flex-direction: row-reverse;
  }
}
@media screen and (max-width: 600px) {
  .blog_title {
    font-size: 14px;
  }
}
@media screen and (max-width: 450px) {
  .blog_body {
    flex-direction: column;
  }
  .blog_info {
    width: 100%;
    padding: 0;
  }
  .imgBlok {
    width: 100%;
  }
}
</style>
