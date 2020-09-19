<template>
  <div :class="['tag', {'tag--interactive': interactive}]">
    <span>{{title}}</span>
    <button v-if="interactive" v-on="$listeners" class="btn-remove" type="button"></button>
  </div>
</template>

<script>
  import icon from "../icon";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    interactive: Boolean
  },
  components: {
    icon
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>
