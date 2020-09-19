import $axios from "../../requests";
import category from "../../components/category";

export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORY: (state, category) => state.data.unshift(category),
    EDIT_CATEGORY: (state, categoryToEdit) => {
      state.data = state.data.map(category => {
        return category.id === categoryToEdit.id ? categoryToEdit : category
      });
    },
    ADD_SKILL: (state, newSkill) => {
      state.data = state.data.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      })
    },
    REMOVE_SKILL: (state, skillToRemove) => {
      state.data = state.data.map(category => {
        if (category.id === skillToRemove.category) {
          category.skills = category.skills.filter(skill => skill.id !== skillToRemove.id)
        }
        return category;
      })
    },
    EDIT_SKILL: (state, skillToEDit) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === skillToEDit.id ? skillToEDit : skill
        });
      }
      const findCategory = category => {
        if (category.id === skillToEDit.category) {
          editSkillInCategory(category);
        }

        return category;
      }
      state.data = state.data.map(findCategory);
    },
  },
  actions: {
    async create({commit}, title) {
      try {
        const {data} = await this.$axios.post("/categories", {title});
        commit("ADD_CATEGORY", data)
      } catch (error) {
        throw new Error('Произошла ошибка');
      }
    },
    async fetch({commit}) {
      try {
        const {data} = await this.$axios.get("/categories/413");
        commit("SET_CATEGORIES", data)
      } catch (error) {
        console.log(error)
      }
    },
    async edit({commit}, categoryToEdit) {
      try {
        const {data} = await this.$axios.post(`/categories/${categoryToEdit.id}`, categoryToEdit);
        commit("EDIT_CATEGORY", data)
      } catch (error) {
        throw new Error('Произошла ошибка');
      }
    },
  }
}
