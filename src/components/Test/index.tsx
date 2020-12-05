import { defineComponent, ref } from "vue";
import AddBar from "../AddBar/index.vue"

export default defineComponent({
  props: {
    name: String,
  },
  setup({ name }) {


    return () => (
      <>
        <div>Hello {name}</div>
        <AddBar />
      </>
    );
  },
});
