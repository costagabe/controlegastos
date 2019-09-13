<template lang="html">

  <section class="tags">
    <h1>tags Component</h1>
  </section>

</template>

<script lang="ts">
import FloatingButtonsAction from "../classes/FloatingButtonsAction";
function generateFloatingButtons(): Array<FloatingButtonsAction> {
  const ret = new Array<FloatingButtonsAction>();
  const aux = new FloatingButtonsAction("mdi-plus-circle", "green", () => {
     this.$router.push({name:'cadastroTag',params:{tipo:"transacoes"}});
  });
  ret.push(aux);
  return ret;
}
export default {
  name: "tags",
  props: [],
  mounted() {
    const floatingButtons = generateFloatingButtons.bind(this)();
    this.$emit("changeFloatingButtons", floatingButtons);
  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.tags {
}
</style>
