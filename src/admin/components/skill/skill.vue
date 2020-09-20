<template>
  <div class="skill-component" v-if="!editMode">
    <div class="skill-component__title">{{skill.title}}</div>
    <div class="skill-component__percent">{{skill.percent}}</div>
    <div class="skill-component__btns">
      <icon
        @click="editMode=true"
        symbol="pencil"
        class="skill-component__btn"
        grayscale
      />
      <icon
        @click="$emit('remove', skill.id)"
        symbol="trash"
        class="skill-component__btn"
        grayscale
      />
    </div>
  </div>
  <div class="skill-component" v-else>
    <div class="skill-component__title">
      <app-input
        v-model="currentSkill.title"
        noSidePaddings
      />
    </div>
    <div class="skill-component__percent">
      <app-input
        type="number"
        min="0"
        max="100"
        maxlength="3"
        v-model="currentSkill.percent"
      />
    </div>
    <div class="skill-component__btns">
      <icon
        @click="$emit('approve', currentSkill)"
        symbol="tick"
        class="skill-component__btn"
      />
      <icon
        @click="editMode=false"
        symbol="cross"
        class="skill-component__btn"
      />
    </div>
  </div>
</template>

<script>
  import input from "../input";
  import icon from "../icon";
export default {
  components: {
    appInput: input, icon
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      currentSkill: {
        id: 0,
        title: this.skill.title,
        percent: this.skill.percent
      }
    }
  }
}
</script>
<style lang="postcss" scoped src="./skill.pcss"></style>
