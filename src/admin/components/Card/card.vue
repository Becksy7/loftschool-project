<template>
  <div class="card card--plain" v-if="simple">
    <slot name="default"></slot>
  </div>
  <div class="card" v-else>
    <div class="card__container">
      <div class="card__header">
        <div class="card__text" v-text="title"></div>
        <slot name="title" v-if="!!title === false"></slot>
      </div>
      <div class="card__content">
        <slot name="content"></slot>
      </div>
      <div class="card__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "" 
    },
    simple: Boolean
  }
};
</script>


<style lang="postcss" src="./card.pcss" scoped>
</style>

