<template>
  <div class="card-review">
    <div class="card-review__desc">
      <div class="card-review__author">
        <div class="card-review__img-wrap">
          <img class="card-review__img" :src="cover" alt="">
        </div>
        <div>
          <h3 class="card-review__name">{{review.author}}</h3>
          <div class="card-review__occ">{{review.occ}}</div>
        </div>
      </div>
      <p class="card-review__text">{{review.text}}</p>
      <div class="card-review__btns">
        <button class="card-review__btn" @click="$emit('edit', currentReview)">
          Править
          <icon
            symbol="pencil"
            class="card-review__btn-icon"
          />
        </button>
        <button class="card-review__btn" @click="$emit('remove', currentReview)">
          Удалить
          <icon
            symbol="cross"
            class="card-review__btn-icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import icon from "../icon";
export default {
  components: {
    icon
  },
  props: {
    review: {
      type: Object
    }
  },
  data() {
    return {
      currentReview: {
        id: this.review.id,
        editMode: false,
      }
    }
  },
  computed: {
    cover() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`
    },
  },
}
</script>
<style lang="postcss" scoped src="./card-review.pcss"></style>
