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
              :skills="category.skills"
              @create-skill="createSkill($event, category.id)"
              @edit-skill="editSkill"
              @remove-skill="removeSkill"
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
  import category from "../../components/category";
  import {mapActions, mapState} from "vuex";
  import skill from "../../components/skill";
  export default {
    components: {
      baseTemplate,
      iconedBtn,
      category
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
        fetchCategoriesAction: "categories/fetch",
        addSkillAction: "skills/add",
        editSkillAction: "skills/edit",
        removeSkillAction: "skills/remove",
      }),
      async createSkill(skill, categoryId) {
        const newSkill = {
          ...skill,
          category: categoryId
        }
        await this.addSkillAction(newSkill);

        skill.title = "";
        skill.percent = "";

      },
      removeSkill(skill) {
        this.removeSkillAction(skill);
      },
      async editSkill(skillToEdit) {
        await this.editSkillAction(skillToEdit);
        skillToEdit.editMode = false;
      },
      async createCategory(categoryTitle) {
        try {
          await this.createCategoryAction(categoryTitle);
          this.emptyCategoryIsShow = false;
        } catch (error) {
          console.log(error.message);
        }
      }
    },
    created() {
      this.fetchCategoriesAction();
    }
  }
</script>
