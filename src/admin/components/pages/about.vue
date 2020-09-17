<template>
  <main class="main">
    <div class="container main__container">
      <div class="main__caption">
        <h1 class="main__title">Блок «Обо мне»</h1>
        <div class="main__caption-btn">
          <iconed-btn type="iconed" title="Добавить группу" v-if="!emptyCategoryIsShow" @click="emptyCategoryIsShow=true" />
        </div>
      </div>
      <div class="cards">
        <div class="cards__list">
          <div class="cards__item" v-if="emptyCategoryIsShow">
            <category empty @remove="emptyCategoryIsShow=false"/>
          </div>
          <div class="cards__item" v-for="category in categories" :key="category.id">
            <category :title="category.category" :skills="category.skills"/>
          </div>
        </div>
      </div>
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
        categories: [],
        emptyCategoryIsShow: false
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
