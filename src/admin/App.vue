<template>
  <div class="wrapper">
    <div class="page-container">
      <header-component title="Панель администрирования">
       <avatar src="https://picsum.photos/300/300" title="Владимир Астаханов"/>
      </header-component>
      <navigation/>
      <router-view/>
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
    </div>
  </div>
</template>
<script>
import avatar from "./components/avatar";
import headerComponent from "./components/header/header";
import navigation from "./components/navigation/navigation";
import iconedBtn from "./components/button/button";
import category from "./components/category";
export default {
  components: {
    avatar,
    headerComponent,
    navigation,
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
    this.categories = require("./data/categories.json");
  }
}
</script>
<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
</style>
<style lang="postcss" scoped src="./admin.pcss"></style>