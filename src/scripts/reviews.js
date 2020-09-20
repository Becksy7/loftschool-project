import Vue from "vue";
import Flickity from 'vue-flickity';
import axios from "axios";
import config from "../../env.paths.json";

axios.defaults.baseUrl = config.BASE_URL;

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
        item.photo = `https://webdev-api.loftschool.com/${item.photo}`;
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
  async created() {
    const {data} = await axios.get("https://webdev-api.loftschool.com/reviews/413");
    this.reviews = this.requireImagesToArray(data);
  }
});
