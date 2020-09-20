<template>
  <base-template>
    <div class="main__caption">
      <h1 class="main__title">Блок «Обо мне»</h1>
      <div class="main__caption-btn">
        <iconed-btn type="iconed" title="Добавить группу" v-if="!emptyCategoryIsShow" @click="emptyCategoryIsShow=true" />
      </div>
    </div>
    <div class="cards" v-if="categories.length">
      <div class="cards__list">
        <div class="cards__item" v-if="emptyCategoryIsShow">
          <category
              empty
              @remove="emptyCategoryIsShow=false"
              @approve="createCategory"
          />
        </div>
        <div class="cards__item" v-for="category in categories" :key="category.id">
          <category
              :title="category.category"
              :id="category.id"
              :skills="category.skills"
              @create-skill="createSkill($event, category.id)"
              @edit-skill="editSkill"
              @remove-skill="removeSkill"
              @approve="editCategory($event, category, category.id)"
          />
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </base-template>
</template>
<script>
  import baseTemplate from "../../components/base-template";
  import iconedBtn from "../../components/button/button";
  import {mapActions, mapState} from "vuex";
  import skill from "../../components/skill";
  export default {
    components: {
      baseTemplate,
      iconedBtn,
      category: () => import("../../components/category")
    },
    data() {
      return {
        emptyCategoryIsShow: false
      }
    },
    computed: {
      ...mapState("categories", {
        categories: state => state.data
      })
    },
    methods: {
      ...mapActions({
        createCategoryAction: "categories/create",
        editCategoryAction: "categories/edit",
        fetchCategoriesAction: "categories/fetch",
        addSkillAction: "skills/add",
        editSkillAction: "skills/edit",
        removeSkillAction: "skills/remove",
        showTooltip: "tooltips/show"
      }),
      async createSkill(skill, categoryId) {
        const newSkill = {
          ...skill,
          category: categoryId
        }
        try {
          await this.addSkillAction(newSkill);
          this.showTooltip({
            text: "Данные успешно добавлены",
            type: "success"
          })
          skill.title = "";
          skill.percent = "";
        } catch (error) {
          this.showTooltip({
            text: error.message,
            type: "error"
          })
        }
      },
      async removeSkill(skill) {
        try {
          await this.removeSkillAction(skill);
          this.showTooltip({
            text: "Данные успешно удалены",
            type: "success"
          })
        } catch (error) {
          this.showTooltip({
            text: error.message,
            type: "error"
          })
        }
      },
      async editSkill(skillToEdit) {
        try {
          await this.editSkillAction(skillToEdit);
          skillToEdit.editMode = false;
          this.showTooltip({
            text: "Данные успешно обновлены",
            type: "success"
          })
        } catch (error) {
          this.showTooltip({
            text: error.message,
            type: "error"
          })
        }
      },
      async createCategory(categoryTitle) {
        try {
          await this.createCategoryAction(categoryTitle);
          this.emptyCategoryIsShow = false;
          this.showTooltip({
            text: "Данные успешно добавлены",
            type: "success"
          })
        } catch (error) {
          this.showTooltip({
            text: error.message,
            type: "error"
          })
        }
      },
      async editCategory(categoryToEdit) {
        console.log(categoryToEdit);
        try {
          await this.editCategoryAction(categoryToEdit);
          this.showTooltip({
            text: "Данные успешно изменены",
            type: "success"
          })
        } catch (error) {
          this.showTooltip({
            text: error.message,
            type: "error"
          })
        }
      }
    },
    created() {
      this.fetchCategoriesAction();
    }
  }
</script>
