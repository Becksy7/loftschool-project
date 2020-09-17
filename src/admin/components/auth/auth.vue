<template>
  <div class="auth">
    <h2 class="auth__title">Авторизация</h2>
    <form class="auth__form" action="">
      <div class="auth__form-group">
        <app-input
            icon="user"
            v-model="user.name"
            :errorMessage="validation.firstError('user.name')"
        />
      </div>
      <div class="auth__form-group">
        <app-input
            icon="key"
            type="password"
            v-model="user.password"
            :errorMessage="validation.firstError('user.password')"
        />
      </div>
      <div class="auth__form-btn">
        <appButton fullWidth title="Отправить"  @click.prevent="login" />
      </div>
    </form>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import appInput from "../input";
import appButton from "../button";
import SimpleVueValidator from 'simple-vue-validator';

const Validator = SimpleVueValidator.Validator;
const baseUrl = 'https://webdev-api.loftschool.com/';

export default {
  mixins: [SimpleVueValidator.mixin],
  validators: {
    'user.name': function (value) {
      return Validator.value(value).required();
    },
    'user.password': function (value) {
      return Validator.value(value).required();
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
      }
    }
  },
  methods: {
    login () {
      console.log(this.user);
      axios.post(baseUrl + 'login', this.user).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error.response.data)
      });
      this.$validate().then(function (success) {
        if (success) {
          console.log(this.user)
        }
      })
    }
  }
}
</script>
<style lang="postcss" scoped src="./auth.pcss"></style>
