import $axios from "../../requests";
import reviews from "../../components/card-review";

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    ADD_REVIEW(state, newReview) {
      state.data.push(newReview);
    },
    SET_REVIEWS(state, reviews) {
      state.data = reviews
    },
    REMOVE_REVIEW: (state, reviewToRemove) => {
      console.log(state.data);
      state.data = state.data.filter(review => review.id !== reviewToRemove.id);
    },
  },
  actions: {
    async add({commit}, newReview) {
      const formData = new FormData();
      Object.keys(newReview).forEach(item => {
        formData.append(item, newReview[item]);
      })

      try {
        const {data} = await this.$axios.post("/reviews", formData);
        commit("ADD_REVIEW", data);
      } catch (error) {
        console.log(error);
      }
    },
    async remove({commit}, reviewToRemove) {
      try {
        const {data} = await this.$axios.delete(`reviews/${reviewToRemove.id}`);
        commit("REMOVE_REVIEW", reviewToRemove);
      } catch(error) {
        console.log(error);
        throw new Error("error");
      }

    },
    async fetch({commit}) {
      try {
        const {data} = await this.$axios.get("/reviews/413");
        commit("SET_REVIEWS", data);
      } catch (error) {
        console.log(error);
      }
    },
  }
}
