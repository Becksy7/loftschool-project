<template>
  <nav class="nav">
    <div class="container nav__container">
      <div class="nav__list">
        <div :class="['nav__item', {'nav__item--active': link.active}]" v-for="link in links" :key="link.id">
          <router-link class="nav__link" :to="link.alias">{{link.title}}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  const links = [
    {id: 0, title: "Обо мне", alias: "about", active: false},
    {id: 1, title: "Работы", alias: "works", active: true},
    {id: 2, title: "Отзывы", alias: "reviews"}
  ];
  export default {
    data() {
      return {
        links
      }
    }
  }
</script>
<style lang="postcss" scoped src="./navigation.pcss"></style>
