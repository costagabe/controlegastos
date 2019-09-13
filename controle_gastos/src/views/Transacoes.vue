<template lang="html">

  <section class="transacoes">
    <ComponentsTable :data="this.dataTable"/>
  </section>

</template>

<script lang="ts">
import FloatingButtonsAction from "../classes/FloatingButtonsAction";
function generateFloatingButtons(): Array<FloatingButtonsAction> {
  const ret = new Array<FloatingButtonsAction>();
  const aux = new FloatingButtonsAction("mdi-plus-circle", "green", () => {
    this.$router.push({name:'cadastroTransacao',params:{tipo:"transacoes"}});
  });
  ret.push(aux);
  return ret;
}
function generateDataTable() {
  return [
    {
      status:"ongoing",
      columns: [
        {
          xs: 10,
          sm:4,
          md: 3,
          title: "Origem",
          content: "Carteira"
        },
        {
          xs: 10,
          sm:4,
          md: 2,
          title: "Destino",
          content: "Compras no mercado"
        },
        {
          xs: 10,
          sm:4,
          md: 2,
          title: "Valor",
          content: "R$ 150,00"
        },
        {
          xs: 10,
          sm:4,
          md: 5,
          title: "Descrição",
          content: "Compras da semana"
        }
      ]
    },{
      status:"complete",
      columns: [
        {
          xs: 10,
          sm:4,
          md: 3,
          title: "Origem",
          content: "Salário"
        },
        {
          xs: 10,
          sm:4,
          md: 2,
          title: "Destino",
          content: "Conta do BB"
        },
        {
          xs: 10,
          sm:4,
          md: 2,
          title: "Valor",
          content: "R$ 1500,00"
        },
        {
          xs: 10,
          sm:4,
          md: 5,
          title: "Descrição",
          content: "Salário referente ao mês de outubro"
        }
      ]
    }
  
   
  ];
}


import ComponentsTable from "../components/ComponentsTable.vue";
export default {
  name: "transacoes",
  props: [],
  components: { ComponentsTable },
  mounted() {
    const floatingButtons = generateFloatingButtons.bind(this)();
    this.dataTable = generateDataTable();

    this.$emit("changeFloatingButtons", floatingButtons);
  },
  data() {
    return {
      dataTable: []
    };
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">

</style>
