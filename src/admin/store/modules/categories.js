export default {
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    async create(store, title) {
      try {
        const response = await this.$axios.post("/categories", {title});
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    }
  }
}
