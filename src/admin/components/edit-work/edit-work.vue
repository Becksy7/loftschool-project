<template>
  <div class="edit-work">
    <div class="edit-work__container">
      <div class="edit-work__caption">
        <h2 class="edit-work__title">Редактирование работы</h2>
      </div>
      <form class="edit-work__form" @submit.prevent="handleSubmit">
        <div class="edit-work__form-wrap">
          <div class="edit-work__item">
            <label
                :style="{backgroundImage: `url(${newWork.preview})`}"
                :class="['uploader', {active: newWork.preview}, {'uploader--hovered': hovered}]"
                @dragover="handleDragOver"
                @drop="handleChange"
                @dragleave="hovered = false"
            >
              <div class="uploader__title">
                Перетащите или нажмите<br>для загрузки изображения
              </div>
              <div class="uploader__btn">
                <app-button
                    title="ЗАГРУЗИТЬ"
                    typeAttr="file"
                    @change="handleChange"
                ></app-button>
              </div>
            </label>
          </div>
          <div class="edit-work__item">
            <div class="edit-work__form-group">
              <app-input
                  v-model="newWork.title" title="Название" :errorMessage="validation.firstError('newWork.title')" />
            </div>
            <div class="edit-work__form-group">
              <app-input v-model="newWork.link" title="Ссылка" :errorMessage="validation.firstError('newWork.link')" />
            </div>
            <div class="edit-work__form-group">
              <app-input v-model="newWork.description" :errorMessage="validation.firstError('newWork.description')" fieldType="textarea" title="Описание" />
            </div>

            <tags-adder v-model="newWork.techs" :tags="newWork.techs"/>
            <div class="edit-work__btns">
              <button class="edit-work__cancel-btn" @click="$emit('cancel')">Отмена</button>
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
  import tagsAdder from "../tagsAdder";
  import appButton from "../button";
  import SimpleVueValidator from 'simple-vue-validator';
  import {mapActions} from "vuex";

  const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  validators: {
    'newWork.title': function (value) {
      return Validator.value(value).required("Укажите название");
    },
    'newWork.link': function (value) {
      return Validator.value(value).required("Укажите ссылку");
    },
    'newWork.description': function (value) {
      return Validator.value(value).required("Необходимо заполнить описание");
    },
  },
  components: {
    appInput, tagsAdder, appButton
  },
  data() {
    return {
      hovered: false,
      newWork: {
        title: "",
        link: "",
        techs: "",
        description: "",
        photo: {},
        preview: "",
      }
    }
  },
  methods: {
    ...mapActions({
      addNewWork: "works/add",
      showTooltip: "tooltips/show"
    }),
    async handleSubmit() {
      if (await this.$validate() === false) return;
      try {
        await this.addNewWork(this.newWork);
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
      this.newWork.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
    },
    renderPhoto(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.newWork.preview = reader.result;
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
<style lang="postcss" scoped src="./edit-work.pcss"></style>
