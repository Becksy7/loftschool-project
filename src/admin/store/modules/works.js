import $axios from "../../requests";
import work from "../../components/card-work";

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    ADD_WORK(state, newWork) {
      state.data.push(newWork);
    },
    SET_WORKS(state, works) {
      state.data = works
    },
    REMOVE_WORK: (state, workToRemove) => {
      console.log(state.data);
      state.data = state.data.filter(work => work.id !== workToRemove.id);
    },
  },
  actions: {
    async add({commit}, newWork) {
      const formData = new FormData();
      let curItemKey;
      Object.keys(newWork).forEach(item => {
        if (item !== 'preview') {
          formData.append(item, newWork[item]);
        }
      })

      try {
        const {data} = await this.$axios.post("/works", formData);
        commit("ADD_WORK", data);
      } catch (error) {
        console.log(error);
      }
    },
    async remove({commit}, workToRemove) {
      try {
        const {data} = await this.$axios.delete(`works/${workToRemove.id}`);
        commit("REMOVE_WORK", workToRemove);
      } catch(error) {
        console.log(error);
        throw new Error("error");
      }

    },
    async fetch({commit}) {
      try {
        const {data} = await this.$axios.get("/works/413");
        commit("SET_WORKS", data);
      } catch (error) {
        console.log(error);
      }
    },
  }
}
