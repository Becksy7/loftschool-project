<template>
  <div class="avatar-component">
    <div class="avatar-component__wrap">
      <div class="avatar-component__img-wrap" :class="{'avatar-component__img-wrap--bordered' : active}" :style="measures">
        <img
            class="avatar-component__img"
            v-bind="$attrs"
            alt="user picture"
        />
      </div>
      <div class="avatar-component__username" v-text="title"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "3"
    },
    title: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    measures() {
      const size = Number(this.size);
      return {
        width: `${size}rem`,
        height: `${size}rem`,
      }
    }
  }
}
</script>
<style lang="postcss" scoped src="./avatar.pcss"></style>
