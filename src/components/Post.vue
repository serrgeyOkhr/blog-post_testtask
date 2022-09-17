<template>
  <div class="blog_body" :class="{ reverse: post.id % 2 == 1 }">
    <div class="imgBlok">
      <div class="imgPreloader" v-if="randomImg === ''"></div>
      <img v-else :src="randomImg" alt="" />
    </div>
    <div class="blog_info">
      <h3 class="blog_title">{{ post.title }}</h3>
      <button class="btn" @click="openPost(post.id)">Перейти</button>
    </div>
  </div>
</template>

<script>
import { ref, toRef } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { capitalizeFirsLetter } from "@/options";
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

    function openPost(id) {
      router.push("/post/" + id);
    }
    return { post, randomImg, openPost };
  },
};
</script>

<style>
.blog_body {
  display: flex;
  width: calc(50% - 40px);
  align-items: center;
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
  display: flex;
}
.imgPreloader {
  display: block;
  width: 100%;
  min-height: 150px;
  background-color: #ccc;
}

.btn {
  padding: 10px 15px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  border: none;
  background-color: #fff;
}
.btn:hover {
  background-color: rgb(214, 214, 214);
}

@media screen and (max-width: 1100px) {
  .blog_body {
    width: 100%;
  }
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
