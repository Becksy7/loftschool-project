<template>
  <base-template>
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
  </base-template>
</template>
<script>
  import baseTemplate from "../../components/base-template";
  import iconedBtn from "../../components/button/button";
  import category from "../../components/category";
  export default {
    components: {
      baseTemplate,
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
