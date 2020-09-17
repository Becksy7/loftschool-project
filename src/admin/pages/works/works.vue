<template>
  <base-template>
    <div class="main__caption">
      <h1 class="main__title">Блок «Работы»</h1>
    </div>
    <div class="works-wrap">
      <edit-work/>
      <ul class="works">
        <li class="works__item">
          <square-btn
              type="square"
              title="Добавить<br>работу"
          />
        </li>
        <li class="works__item"  v-for="work in works">
          <card-work :work="work"/>
        </li>
      </ul>
    </div>
  </base-template>
</template>

<script>
  import baseTemplate from "../../components/base-template";
  import cardWork from "../../components/card-work";
  import squareBtn from "../../components/button";
  import editWork from "../../components/edit-work";
  export default {
    components: {
      baseTemplate,
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
          work.photo = require(`../../../images/content/${work.photo}`).default;
          return work;
        })
      }
    },
    mounted() {
      this.requireImg();
    },
    created() {
      this.works = require('../../../data/works.json')
    }
  }
</script>
