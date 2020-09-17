<template>
  <div class="login-page">
    <div class="login-page__wrap">
      <app-auth/>
    </div>
  </div>
</template>
<script>
import appAuth from "../../components/auth";
export default {
  components: {
    appAuth
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="postcss">
@import "normalize.css";
@import "../../../styles/mixins.pcss";
@import "../../../styles/layout/base.pcss";
</style>
<style lang="postcss" scoped src="../../admin.pcss"></style>
