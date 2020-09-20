import Vue from "vue";
import axios from "axios";
import config from "../../env.paths.json";

axios.defaults.baseUrl = config.BASE_URL;

const skillsItem = {
  props: ["skill"],
  template: "#skills-item",
  methods: {
    drawPercentageCircle() {
      const circle = this.$refs["colored-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      circle.style.strokeDashoffset = (dashArray / 100) * (100 - this.skill.percent);
    }
  },
  mounted() {
    this.drawPercentageCircle();
  }
}

const skillsRow = {
  props: ["category"],
  template: "#skills-row",
  components: {
    skillsItem
  }
}

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: []
    }
  },
  async created() {
    const {data} = await axios.get("https://webdev-api.loftschool.com/categories/413");
    this.skills = data;
  }
});
