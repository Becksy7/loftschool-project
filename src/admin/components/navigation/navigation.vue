<template>
  <nav class="nav">
    <div class="container nav__container">
      <div class="nav__list">
        <router-link
            v-for="link in links" :key="link.id"
            :to="link.alias"
            v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <div
              :class="['nav__item', {'nav__item--active': isActive && isExactActive}]"
          >
            <a class="nav__link" :href="href" @click="navigate">{{link.title}}</a>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
  const links = [
    {id: 0, title: "Обо мне", alias: "/", active: false},
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
