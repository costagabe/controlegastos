<template>
  <v-app>
    <Navbar />
    <FloatingButtons :actions="this.actions" />
    <v-content>
      <v-container class="pa-8 mt-8">
        <router-view @changeFloatingButtons="changeFloatingButtons" ></router-view> 
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang='ts'>
import Vue from "vue";
import FloatingButtons from "./components/FloatingButtons.vue";
import FloatingButtonsAction from "./classes/FloatingButtonsAction";
import Navbar from "./components/Navbar.vue";

var VueApp: any = Vue;
export default VueApp.extend({ 
  name: "App",
  components: {
    FloatingButtons,
    Navbar
  },
  data: () => ({
    actions: new Array<FloatingButtonsAction>()
  }),
  methods: {
    changeFloatingButtons(data: Array<FloatingButtonsAction>) {
      this.actions = data;
      console.log("mudou");
    }
  }
});
</script>
