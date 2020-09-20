<template>
  <base-template>
    <div class="main__caption">
      <h1 class="main__title">Блок «Отзывы»</h1>
    </div>
    <div class="reviews-wrap">
      <edit-review
          v-model="currentReview"
          v-if="editReviewIsShown"
          @cancel="editReviewIsShown = false"
      />
      <ul class="reviews">
        <li class="reviews__item">
          <square-btn
              type="square"
              title="Добавить<br>отзыв"
              :disabled="editReviewIsShown"
              @click="editReviewIsShown = true"
          />
        </li>
        <li class="reviews__item"  v-for="review in reviews" :key="review.id">
          <card-review
              :review="review"
              @remove="removeReview"
              @edit="editReview"
          />
        </li>
      </ul>
    </div>
  </base-template>
</template>

<script>
import baseTemplate from "../../components/base-template";
import cardReview from "../../components/card-review";
import squareBtn from "../../components/button";
import editReview from "../../components/edit-review";
import {mapActions, mapState} from "vuex";
export default {
  components: {
    baseTemplate,
    cardReview,
    squareBtn,
    editReview
  },
  data() {
    return {
      editReviewIsShown: false,
      currentReview: {}
    }
  },
  computed: {
    ...mapState("reviews", {
      reviews: (state) => state.data
    })
  },
  methods: {
    ...mapActions({
      fetchreviews: "reviews/fetch",
      removeReviewAction: "reviews/remove",
      showTooltip: "tooltips/show"
    }),
    async removeReview(reviewToRemove) {
      try {
        await this.removeReviewAction(reviewToRemove);
        this.showTooltip({
          text: "Данные успешно удалены",
          type: "success"
        })
      } catch (error) {
        this.showTooltip({
          text: "Произошла ошибка",
          type: "error"
        })
      }
    },
    async editReview(reviewToEdit) {
      this.editReviewIsShown = true;
      this.currentReview = reviewToEdit;
    }
  },
  mounted() {
    this.fetchreviews();
  },
}
</script>
