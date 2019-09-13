<template lang="html">

  <section class="relatorios">
    <h1>relatorios Component</h1>
  </section>

</template>

<script lang="ts">
import FloatingButtonsAction from "../classes/FloatingButtonsAction";
function generateFloatingButtons(): Array<FloatingButtonsAction> {
  const ret = new Array<FloatingButtonsAction>();
  const aux = new FloatingButtonsAction("mdi-plus-circle", "green", () => {
    console.log("oi");
  });
  ret.push(aux);
  return ret;
}
export default {
  name: "relatorios",
  props: [],
  mounted() {
    const floatingButtons = generateFloatingButtons();
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
.relatorios {
}
</style>
