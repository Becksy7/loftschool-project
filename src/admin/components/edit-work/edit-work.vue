<template>
  <div class="edit-work">
    <div class="edit-work__container">
      <div class="edit-work__caption">
        <h2 class="edit-work__title">Редактирование работы</h2>
      </div>
      <form class="edit-work__form">
        <div class="edit-work__form-wrap">
          <div>
            <app-input
              type="file"
            />
          </div>
          <div>
            <div class="edit-work__form-group">
              <app-input v-model="work.title" title="Название" :errorMessage="validation.firstError('work.title')" />
            </div>
            <div class="edit-work__form-group">
              <app-input v-model="work.link" title="Ссылка" :errorMessage="validation.firstError('work.link')" />
            </div>
            <div class="edit-work__form-group">
              <app-input fieldType="textarea" title="Описание" />
            </div>

            <tags-adder :tags="work.skills"/>
            <div class="edit-work__btns">
              <appButton title="Сохранить" @click.prevent="submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import appInput from "../input";
  import tagsAdder from "../tagsAdder";
  import appButton from "../button";
  import SimpleVueValidator from 'simple-vue-validator';

  const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  validators: {
    'work.title': function (value) {
      return Validator.value(value).required();
    },
    'work.link': function (value) {
      return Validator.value(value).required();
    }
  },
  components: {
    appInput, tagsAdder, appButton
  },
  data() {
    return {
      work: {
        title: "",
        link: "",
        skills: ""
      }
    }
  },
  methods: {
    submit: function () {
      this.$validate().then(function (success) {
        if (success) {

        }
      })
    }
  }
}
</script>
<style lang="postcss" scoped src="./edit-work.pcss"></style>
