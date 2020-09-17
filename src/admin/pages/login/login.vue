<template>
  <div class="login-page">
    <div class="page-container">
      <auth/>
    </div>
  </div>
</template>
<script>
import auth from "../../components/auth";
export default {
  components: {
    auth
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
<style lang="postcss" scoped src="../admin.pcss"></style>
