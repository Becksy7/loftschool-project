<template>
  <main class="main">
    <div class="container main__container">
      <div class="main__caption">
        <h1 class="main__title">Блок «Работы»</h1>
      </div>
      <div class="works-wrap">
        <edit-work/>
        <ul class="works">
          <li class="works__item">
            <square-btn
              type="square"
              title="Добавить <br>работу"
            />
          </li>
          <li class="works__item"  v-for="work in works">
            <card-work :work="work"/>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
  import cardWork from "./card-work";
  import squareBtn from "./button";
  import editWork from "./edit-work";
  export default {
    components: {
      cardWork,
      squareBtn,
      editWork
    },
    data () {
      return {
        works: []
      }
    },
    methods: {
      requireImg() {
        this.works = this.works.map(work => {
          work.photo = require(`../../images/content/${work.photo}`).default;
          return work;
        })
      }
    },
    mounted() {
      this.requireImg();
    },
    created() {
      this.works = require('../../data/works.json')
    }
  }
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../../styles/mixins.pcss";
  @import "../../styles/layout/base.pcss";
</style>
<style lang="postcss" scoped src="../admin.pcss"></style>