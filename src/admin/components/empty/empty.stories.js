import empty from "./empty.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "empty",
  components: { empty },
  decorators: [withKnobs]
};

export const defaultView = () => ({
  components: { empty },
  template: `
    
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}