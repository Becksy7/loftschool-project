import editWork from "./edit-work.vue";

export default {
  title: "editWork",
  components: { editWork }
};

export const defaultView = () => ({
  components: { editWork },
  template: `
    <edit-work/>
  `,
});

defaultView.story = {
  name: "Стандартный вид"
}