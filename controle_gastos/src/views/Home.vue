<template>
  <h1>Welcome!</h1>
</template>

<script lang="ts">
import Vue from "vue";
import FloatingButtonsAction from "../classes/FloatingButtonsAction";

function generateFloatingButtons(): Array<FloatingButtonsAction> {
  const ret = new Array<FloatingButtonsAction>();
  ret.push(new FloatingButtonsAction("mdi-swap-horizontal", "green", () => {
    console.log("oi");
  }));
  ret.push(new FloatingButtonsAction("mdi-wallet", "green", () => {
    console.log("oi");
  }));
  ret.push(new FloatingButtonsAction("mdi-format-list-bulleted", "green", () => {
    console.log("oi");
  }));
  ret.push(new FloatingButtonsAction("mdi-tag", "green", () => {
    console.log("oi");
  }));
  return ret;
}

export default Vue.extend({
  components: {},
  mounted() {
    const floatingButtons = generateFloatingButtons();

    this.$emit("changeFloatingButtons", floatingButtons);
  }
});
</script>
