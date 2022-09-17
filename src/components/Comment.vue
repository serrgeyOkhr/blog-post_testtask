<template>
  <div class="commentPerson">
    <div class="personIcon">
      <img :src="randomIMG" alt="" />
    </div>
    <h5 class="personName">{{ comment.name }}</h5>
  </div>
  <p>{{ comment.body }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "comment-component",
  props: {
    comment: {
      type: Object,
    },
  },
  setup() {
    const randomIMG = ref("");
    getRandomImg(randomIMG);
    function getRandomImg(output) {
      fetch("https://picsum.photos/30").then(
        (response) => (output.value = response.url)
      );
    }

    return { randomIMG };
  },
};
</script>

<style>
.commentPerson {
  display: flex;
  align-items: center;
  padding-bottom: 3px;
  border-bottom: 1px solid;
}
.personIcon {
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.personName {
  margin: 0;
}
</style>
