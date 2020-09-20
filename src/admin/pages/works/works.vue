<template>
  <base-template>
    <div class="main__caption">
      <h1 class="main__title">Блок «Работы»</h1>
    </div>
    <div class="works-wrap">
      <edit-work
          v-model="currentWork"
          v-if="editWorkIsShown"
          @cancel="editWorkIsShown = false"
      />
      <ul class="works">
        <li class="works__item">
          <square-btn
              type="square"
              title="Добавить<br>работу"
              :disabled="editWorkIsShown"
              @click="editWorkIsShown = true"
          />
        </li>
        <li class="works__item"  v-for="work in works" :key="work.id">
          <card-work
              :work="work"
              @remove="removeWork"
              @edit="editWork"
          />
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
  import {mapActions, mapState} from "vuex";
  export default {
    components: {
      baseTemplate,
      cardWork,
      squareBtn,
      editWork
    },
    data() {
      return {
        editWorkIsShown: false,
        currentWork: {}
      }
    },
    computed: {
      ...mapState("works", {
        works: (state) => state.data
      })
    },
    methods: {
      ...mapActions({
        fetchWorks: "works/fetch",
        removeWorkAction: "works/remove",
        showTooltip: "tooltips/show"
      }),
      async removeWork(workToRemove) {
        try {
          await this.removeWorkAction(workToRemove);
          this.showTooltip({
            text: "Данные успешно удалены",
            type: "success"
          })
        } catch (error) {
          this.showTooltip({
            text: "Произошла ошибка",
            type: "error"
          })
        }
      },
      async editWork(workToEdit) {
        this.editWorkIsShown = true;
        this.currentWork = workToEdit;
      }
    },
    mounted() {
      this.fetchWorks();
    },
  }
</script>
