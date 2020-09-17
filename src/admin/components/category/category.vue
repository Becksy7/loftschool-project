<template>
  <card>
    <editLine slot="title" v-model="categoryTitle" :editModeByDefault="empty"/>
    <template slot="content">
      <div class="skills" v-if="!empty">
        <div class="skills__list">
          <div class="skills__item" v-for="skill in skills" :key="skill.id">
            <skill :skill="skill"/>
          </div>
        </div>
      </div>
    </template>
    <template slot="footer">
      <skill-add-line :blocked="empty"/>
    </template>
  </card>
</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine"
export default {
  components: {card, editLine, skill, skillAddLine},
  props: {
    empty: Boolean,
    title: {
      type: String
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      categoryTitle: this.title,
    }
  }
}
</script>

<style lang="postcss" scoped src="./category.pcss"></style>