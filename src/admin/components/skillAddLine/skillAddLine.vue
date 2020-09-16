<template>
  <div class="add-line-component">
    <div class="add-line-component__inputs">
      <div class="add-line-component__title">
        <app-input
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
      <iconed-btn type="iconed" title="" noTitle/>
    </div>
  </div>
</template>
<script>
  import input from "../input";
  import iconedBtn from "../button";
  export default {
    components: {
      appInput: input, iconedBtn
    },
    props: {

    },
    data() {
      return {

      }
    }
  }
</script>
<style lang="postcss" scoped src="./skillAddLine.pcss"></style>
