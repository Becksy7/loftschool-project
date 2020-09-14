import headline from "./header";
import { action } from "@storybook/addon-actions";

const methods = {
  onChange: action("onChange")
}

export default {
  title: "headline",
  components: {headline}
}

export const defaultView = () => ({
  components: {headline},
  template: `
    <headline @action="onChange" title="Панель администрирования">
      <h3>dfghjkl;</h3>
    </headline>
  `
})

defaultView.story = {
  name: "Стандартный вид"
}
