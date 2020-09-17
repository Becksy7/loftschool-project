<template>
  <div class="wrapper">
    <div class="page-container">
      <header-component title="Панель администрирования">
        <avatar src="https://picsum.photos/300/300" title="Владимир Астаханов"/>
      </header-component>
      <navigation/>
      <main class="main">
        <div class="container main__container">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import avatar from "../components/avatar";
import headerComponent from "../components/header/header";
import navigation from "../components/navigation/navigation";

export default {
  components: {
    avatar,
    headerComponent,
    navigation,
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="postcss">
@import "normalize.css";
@import "../../styles/mixins.pcss";
@import "../../styles/layout/base.pcss";
</style>
<style lang="postcss" scoped src="../admin.pcss"></style>
