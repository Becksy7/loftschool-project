import auth from "./auth.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "auth",
  components: { auth },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { auth },
  template: `
    <auth/>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}
