import cardWork from "./card-work.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "cardWork",
  components: { cardWork },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { cardWork },
  data() {
    return {
      work: {
        "id": 1,
        "title": "Сайт школы образования",
        "skills": "Html, Css, JavaScript",
        "photo": "slider-1.jpg",
        "link": "//google.com",
        "desc": "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!"
      }
    }
  },
  template: `
    <card-work :work="work"/>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}