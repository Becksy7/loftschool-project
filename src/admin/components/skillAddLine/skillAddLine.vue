<template>
  <div :class="['add-line-component', {'add-line-component--blocked': blocked}]">
    <div class="add-line-component__inputs">
      <div class="add-line-component__title">
        <app-input
          v-model="skill.title"
          placeholder="Новый навык"
          noSidePaddings
          :errorMessage="validation.firstError('skill.title')"
        />
      </div>
      <div class="add-line-component__percent">
        <app-input
          v-model="skill.percent"
          type="number"
          min="0"
          max="100"
          maxlength="3"
          :errorMessage="validation.firstError('skill.percent')"
        />
      </div>
    </div>
    <div class="add-line-component__btns">
      <round-btn type="round" @click="handleClick"/>
    </div>
  </div>
</template>
<script>
  import input from "../input";
  import roundBtn from "../button";
  import SimpleVueValidator from 'simple-vue-validator';

  const Validator = SimpleVueValidator.Validator;

  export default {
    mixins: [SimpleVueValidator.mixin],
    validators: {
      'skill.title': function (value) {
        return Validator.value(value).required("Введите название");
      },
      'skill.percent': function (value) {
        return Validator.value(value)
            .integer("Должно быть числом")
            .between(0, 100, "Некорректное значение")
            .required("Обязательно для заполнения");
      }
    },
    components: {
      appInput: input, roundBtn
    },
    props: {
      blocked: Boolean
    },
    data() {
      return {
        skill: {
          title: "",
          percent: ""
        }
      }
    },
    methods: {
     async handleClick() {
       if (await this.$validate() === false) return;
       this.$emit('approve', this.skill)
     }
    }
  }
</script>
<style lang="postcss" scoped src="./skillAddLine.pcss"></style>
