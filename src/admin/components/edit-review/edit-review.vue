<template>
  <div class="edit-review">
    <div class="edit-review__container">
      <div class="edit-review__caption">
        <h2 class="edit-review__title">Редактирование/добавление отзыва</h2>
      </div>
      <form class="edit-review__form" @submit.prevent="handleSubmit">
        <div class="edit-review__form-wrap">
          <div class="edit-review__item">
            <label
                :class="['uploader', {active: newReview.preview}, {'uploader--hovered': hovered}]"
                @dragover="handleDragOver"
                @drop="handleChange"
                @dragleave="hovered = false"
            >
              <div :class="['uploader__preview', {'uploader__preview--fill': newReview.preview}]" :style="{backgroundImage: `url(${newReview.preview})`}"></div>
              <div class="uploader__btn">
                <app-button
                    title="Добавить фото"
                    typeAttr="photo"
                    @change="handleChange"
                ></app-button>
              </div>
            </label>
          </div>
          <div class="edit-review__item">
            <div class="edit-review__form-row">
              <div class="edit-review__form-group">
                <app-input
                    v-model="newReview.author" title="Имя автора" :errorMessage="validation.firstError('newReview.author')" />
              </div>
              <div class="edit-review__form-group">
                <app-input v-model="newReview.occ" title="Титул автора" :errorMessage="validation.firstError('newReview.occ')" />
              </div>
            </div>



            <div class="edit-review__form-group">
              <app-input v-model="newReview.text" :errorMessage="validation.firstError('newReview.text')" fieldType="textarea" title="Отзыв" />
            </div>
            <div class="edit-review__btns">
              <button class="edit-review__cancel-btn" @click="$emit('cancel')">Отмена</button>
              <appButton title="Сохранить" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import appInput from "../input";
  import appButton from "../button";
  import SimpleVueValidator from 'simple-vue-validator';
  import {mapActions} from "vuex";

  const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  validators: {
    'newReview.author': function (value) {
      return Validator.value(value).required("Укажите автора");
    },
    'newReview.occ': function (value) {
      return Validator.value(value).required("Укажите должность");
    },
    'newReview.text': function (value) {
      return Validator.value(value).required("Необходимо заполнить описание");
    },
  },
  components: {
    appInput, appButton
  },
  data() {
    return {
      hovered: false,
      newReview: {
        author: "",
        occ: "",
        text: "",
        photo: {},
        preview: "",
      }
    }
  },
  methods: {
    ...mapActions({
      addNewReview: "reviews/add",
      showTooltip: "tooltips/show"
    }),
    async handleSubmit() {
      if (await this.$validate() === false) return;
      try {
        await this.addNewReview(this.newReview);
        this.$emit('cancel');
        this.showTooltip({
          text: "Данные успешно добавлены",
          type: "success"
        })
      } catch (error) {
        this.showTooltip({
          text: "Произошла ошибка",
          type: "error"
        })
      }
    },
    handleChange(event) {
      event.preventDefault();
      console.log(event);
      const file = event.dataTransfer? event.dataTransfer.files[0] : event.target.files[0];
      this.newReview.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
    },
    renderPhoto(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.newReview.preview = reader.result;
      }
      reader.onerror = () => {
        this.showTooltip({
          text: "Произошла ошибка",
          type: "error"
        })
      }
      reader.onabort = () => {
        this.showTooltip({
          text: "Произошла ошибка",
          type: "error"
        })
      }
    },
    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },
  }
}
</script>
<style lang="postcss" scoped src="./edit-review.pcss"></style>
