// 测试
import { defineComponent, ref } from "vue";
import { Input } from "ant-design-vue";

export default defineComponent({
  setup() {
    const count = ref(1111);
    function print() {
      console.log(111);
    }

    return () => (
      <>
        <div onClick={print}>ceshi</div>
        <input v-show={false} v-model={[count]} />
        <Input
          v-model={[count, 'value']}
        />
      </>
    );
  },
});
