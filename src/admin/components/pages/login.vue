<template>
  <main class="main">
    <div class="container main__container">

    </div>
  </main>
</template>
<script>
import iconedBtn from "../button/button";
import category from "../category";
export default {
  components: {
    iconedBtn,
    category
  },
  data() {
    return {

    }
  },
  created() {
    this.categories = require("../../data/categories.json");
  }
}
</script>
<style lang="postcss">
@import "normalize.css";
@import "../../../styles/mixins.pcss";
@import "../../../styles/layout/base.pcss";
</style>
<style lang="postcss" scoped src="../../admin.pcss"></style>
