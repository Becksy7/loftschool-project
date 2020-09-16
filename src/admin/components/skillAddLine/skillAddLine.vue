<template>
  <div :class="['add-line-component', {'add-line-component--blocked': blocked}]">
    <div class="add-line-component__inputs">
      <div class="add-line-component__title">
        <app-input
          placeholder="Новый навык"
          noSidePaddings
        />
      </div>
      <div class="add-line-component__percent">
        <app-input
          type="number"
          min="0"
          max="100"
          maxlength="3"
        />
      </div>
    </div>
    <div class="add-line-component__btns">
      <round-btn type="round"/>
    </div>
  </div>
</template>
<script>
  import input from "../input";
  import roundBtn from "../button";
  export default {
    components: {
      appInput: input, roundBtn
    },
    props: {
      blocked: Boolean
    },
    data() {
      return {

      }
    }
  }
</script>
<style lang="postcss" scoped src="./skillAddLine.pcss"></style>
