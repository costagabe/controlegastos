<template>
  <v-app>
    <Navbar />
    <FloatingButtons :actions="this.actions" :isCadastro="this.isCadastro" />
    <v-content>
      <v-container class="pa-8">
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
    actions: new Array<FloatingButtonsAction>(),
    isCadastro: window.location.href.includes('cadastro')
  }),
  mount(){
    this.isCadastro = window.location.href.includes('cadastro');
  },
  updated(){
    this.isCadastro = window.location.href.includes('cadastro');
  },
  methods: {
    changeFloatingButtons(data: Array<FloatingButtonsAction>) {
      this.actions = data;
    }
  }
});
</script>
