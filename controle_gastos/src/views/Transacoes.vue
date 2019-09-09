<template lang="html">

  <section class="transacoes">
    <ComponentsTable/>
  </section>

</template>

<script lang="ts">
import FloatingButtonsAction from "../classes/FloatingButtonsAction";
import ComponentsTable from "../components/ComponentsTable.vue";
export default {
  name: "transacoes",
  props: [],
  components: { ComponentsTable }, 
  mounted() {
    const ret = new Array<FloatingButtonsAction>();
    const aux = new FloatingButtonsAction("mdi-pencil", "green", () => {
      console.log("oi");
    });
    ret.push(aux);
    this.$emit("changeFloatingButtons", ret);

  },
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.transacoes {
}
</style>
