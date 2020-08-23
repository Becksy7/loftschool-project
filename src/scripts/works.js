import Vue from "vue";

const thumbs = {
  props: ["currentWork", "works"],
  template: "#preview-thumbs",
}

const btns = {
  props: ["currentWork", "works", "isLastSlide", "isFirstSlide"],
  template: "#preview-btns",
}

const display = {
  props: ["currentWork", "works", "currentIndex", "isLastSlide", "isFirstSlide"],
  template: "#preview-display",
  components: {
    thumbs, btns
  },
  computed: {
    displayedWorks() {
      const works = [...this.works];
      return works.slice(0,3);
    }
  }
}

const tags = {
  props: ["tags"],
  template: "#preview-tags",
}

const info = {
  props: ["currentWork"],
  template: "#preview-info",
  components: {
    tags
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  }
}

new Vue({
  el: "#preview-component",
  template: "#preview-container",
  data() {
    return {
      works: [],
      currentIndex: 0,
      isLastSlide: false,
      isFirstSlide: true
    }
  },
  components: {
    display, info
  },
  computed: {
    currentWork() {
      return this.works[0];
    }
  },
  watch: {
    currentIndex(value) {
      this.disabledIndex(value);
    }
  },
  methods: {
    makeInfiniteLoopForNdx(index) {
      const worksNumber = this.works.length - 1;
      if (index < 0) this.currentIndex = worksNumber;
      if (index > worksNumber) this.currentIndex = 0;
    },
    disabledIndex(index) {
      const worksNumber = this.works.length - 1;
      if (index > 0) {
        this.isFirstSlide = false;
      } else {
        this.currentIndex = 0;
        this.isFirstSlide = true;
      }

      if (index < worksNumber) {
        this.isLastSlide = false;
      } else {
        this.currentIndex = worksNumber;
        this.isLastSlide = true;
      }

    },
    requireImagesToArray(data) {
      return data.map(item => {
        const requireImg = require(`../images/content/${item.photo}`).default;
        item.photo = requireImg;
        return item;
      })
    },
    slide(direction) {
      const lastItem = this.works[this.works.length - 1];
      switch (direction) {
        case "next":
          if (this.currentIndex < this.works.length - 1) {
            this.works.push(this.works[0]);
            this.works.shift();
            this.currentIndex ++;
          }
          break;
        case "prev":
          if (this.currentIndex > 0) {
            this.works.unshift(lastItem);
            this.works.pop();
            this.currentIndex--;
          }
          break;
      }
    },
    gotoSlide(slideId) {
      const curIndex = this.works.findIndex(el => el.id === this.currentWork.id);
      const index = this.works.findIndex(el => el.id === slideId);
      if (index > curIndex) {
        for (let i = curIndex; i < index; i++ ) {
          this.slide('next');
        }
      }
      if (index < curIndex) {
        for (let i = index; i < curIndex; i++ ) {
          this.slide('prev');
        }
      }
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
  }
});
