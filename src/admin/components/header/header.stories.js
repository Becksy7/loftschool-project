import headerComponent from "./header";
import { action } from "@storybook/addon-actions";

const methods = {
  onChange: action("onChange")
}

export default {
  title: "header",
  components: {headerComponent}
}

export const defaultView = () => ({
  components: {headerComponent},
  template: `
    <header-component @action="onChange" title="Панель администрирования">
      <h3>Content</h3>
    </header-component>
  `
})

defaultView.story = {
  name: "Стандартный вид"
}
