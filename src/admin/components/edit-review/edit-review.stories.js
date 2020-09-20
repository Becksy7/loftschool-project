import editWork from "./edit-review.vue";

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
