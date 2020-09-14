<template>
  <header class="header">
    <div class="container header__container">
      <slot/>
      <div class="header__title">
        <span class="header__title-text">{{title}}</span>
      </div>
      <div class="header__logout">
        <button type="button" class="header-button" @click="$emit('action', 'logout')">Выйти</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>
<style lang="postcss" scoped src="./header.pcss"></style>
