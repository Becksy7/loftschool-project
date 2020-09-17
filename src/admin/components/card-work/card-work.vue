<template>
  <div class="card-work">
    <div class="card-work__preview">
      <img class="card-work__img" :src="work.photo" alt="">
      <div class="card-work__tags">
        <div v-for="(tag, index) in tagsArray" :key="`${tag}${index}`" v-if="tag.trim()">
          <tag :title="tag"/>
        </div>
      </div>
    </div>
    <div class="card-work__desc">
      <h3 class="card-work__title">{{work.title}}</h3>
      <p class="card-work__text">{{work.desc}}</p>
      <a class="card-work__link" :href="work.link">{{work.link}}</a>
      <div class="card-work__btns">
        <button class="card-work__btn">
          Править
          <icon
            symbol="pencil"
            class="card-work__btn-icon"
          />
        </button>
        <button class="card-work__btn">
          Удалить
          <icon
            symbol="cross"
            class="card-work__btn-icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import icon from "../icon";
  import tag from "../tag";
export default {
  components: {
    icon, tag
  },
  props: {
    work: {
      type: Object
    }
  },
  data() {
    return {
      currentTags: this.work.skills
    }
  },
  computed: {
    tagsArray() {
      return this.currentTags.trim().split(',');
    }
  },
}
</script>
<style lang="postcss" scoped src="./card-work.pcss"></style>
