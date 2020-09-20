<template>
  <header class="header">
    <div class="container header__container">
      <slot/>
      <div class="header__title">
        <span class="header__title-text">{{title}}</span>
      </div>
      <div class="header__logout">
        <button type="button" class="header-button" @click="logout">Выйти</button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    title: {
      type: String,
      default: "Панель администрирования",
    },
  },
  methods: {
    ...mapActions({
      logout: "user/logout",
    }),
  },
};
</script>
<style lang="postcss" scoped src="./header.pcss"></style>
