import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
  el: "#reviews",
  template: "#reviews-template",
  components: {
    Flickity
  },
  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        cellAlign: 'left'
      },
    }
  },
  methods: {
    requireImagesToArray(data) {
      return data.map(item => {
        const requireImg = require(`../images/content/${item.photo}`).default;
        item.photo = requireImg;
        return item;
      })
    },
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    }
  },
  mounted() {
    const ref = this.$refs;
    ref.prevBtn.disabled = true;
    this.$refs.flickity.on('change', function( index ) {
      console.log(index);
      (index === this.slides.length - 1) ? ref.nextBtn.disabled = true : ref.nextBtn.disabled = false;
      (index === 0) ? ref.prevBtn.disabled = true : ref.prevBtn.disabled = false;
    });
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);
  }
});
