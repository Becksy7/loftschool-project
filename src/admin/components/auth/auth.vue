<template>
  <div class="auth">
    <div class="auth__wrap">
      <h2 class="auth__title">Авторизация</h2>
      <form class="auth__form" @submit.prevent="handleSubmit">
        <div class="auth__form-group">
          <app-input
              icon="user"
              title="Логин"
              v-model="user.name"
              :errorMessage="validation.firstError('user.name')"
          />
        </div>
        <div class="auth__form-group">
          <app-input
              icon="key"
               title="Пароль"
              type="password"
              v-model="user.password"
              :errorMessage="validation.firstError('user.password')"
          />
        </div>
        <div class="auth__form-btn">
          <appButton fullWidth :disabled="isSubmitDisabled" title="Отправить" typeAttr="submit" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>

import $axios from "../../requests";
import appInput from "../input";
import appButton from "../button";
import SimpleVueValidator from 'simple-vue-validator';
import {mapActions} from "vuex";

const Validator = SimpleVueValidator.Validator;

export default {
  mixins: [SimpleVueValidator.mixin],
  validators: {
    'user.name': function (value) {
      return Validator.value(value).required("Укажите имя пользователя");
    },
    'user.password': function (value) {
      return Validator.value(value).required("Укажите пароль").minLength(6, "Длина пароля не может быть меньше 6 символов");
    }
  },
  components: {
    appInput,
    appButton
  },
  data () {
    return {
      user: {
        name: "",
        password: ""
      },
      isSubmitDisabled: false
    }
  },
  methods: {
    ...mapActions({
      showTooltip: "tooltips/show"
    }),
    async handleSubmit() {
      const $this = this;
      if (await this.$validate() === false) return;
      $this.isSubmitDisabled = true;
      try {
        const response = await $axios.post('/login', $this.user);
        const token = response.data.token;
        localStorage.setItem("token", token);
        $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        $this.$router.replace('/');
      } catch (error) {
        this.showTooltip({
          text: error.response.data.error,
          type: "error"
        })
      } finally {
        $this.isSubmitDisabled = false;
      }
    }
  }
}
</script>
<style lang="postcss" scoped src="./auth.pcss"></style>
