<template lang='html'>
  <nav>
 <v-app-bar class='indigo darken-3 white--text' app>
  <v-app-bar-nav-icon color='white' @click='drawer=!drawer'></v-app-bar-nav-icon>
  <v-toolbar-title class='headline text-uppercase'>
    <span>Finance </span>
    <span class='font-weight-light'>Manager </span>
  </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn text href='#'>
    <span class='mr-2 white--text'>Sair</span>
  </v-btn>
</v-app-bar>

  <v-navigation-drawer v-model='drawer' app class='indigo darken-4' >
    <v-list-item v-for="link in links"  :key='link.text' router :to='link.route'>
      <v-list-item-content>
        <v-list-item-title>
           <p class="white--text"><v-icon class='white--text'>{{ link.icon }}</v-icon> 
           
         <span class="ml-5">{{ link.text }}</span>
         </p>
        </v-list-item-title>

      </v-list-item-content>
    </v-list-item>

   
    </v-navigation-drawer>
</nav>


</template>

<script lang='ts'>
export default {
  name: "Navbar",
  props: [],
  mounted() {},
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-swap-horizontal", text: "Transações", route: "/transacoes" },
        { icon: "mdi-wallet", text: "Contas", route: "/contas" },
        { icon: "mdi-format-list-bulleted", text: "Categorias", route: "/categorias" },
        { icon: "mdi-tag", text: "Tags", route: "/tags" },
        { icon: "mdi-file-chart", text: "Relatórios", route: "/relatorios" }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>
