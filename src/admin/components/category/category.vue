<template>
  <card>
    <editLine slot="title" v-model="title" editModeByDefault/>
  </card>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
export default {
  components: {card, editLine},
  data() {
    return {
      title: ""
    }
  }
}
</script>

<style lang="postcss" scoped src="./category.pcss"></style>