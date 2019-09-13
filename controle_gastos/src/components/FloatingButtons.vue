<template lang="html">
<span v-if="!this.isCadastro">
  <v-speed-dial
      v-model="fab"
      :bottom="true"
      :right="true"
      :direction="'top'"
      :open-on-hover="false"
      :transition="'slide-y-reverse-transition'"
      fixed
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="indigo darken-3" dark small fab class="ma-5">
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small v-for="action in actions" :color="action.color" @click="()=>{action.action();fab = false}">
        <v-icon>{{ action.icon }}</v-icon>
      </v-btn>
    </v-speed-dial>
</span>
</template>

<script lang="ts">
import FloatingButtonsAction from "./classes/FloatingButtonsAction.vue";
  export default  {
    name: 'floating-buttons',
    props: ['actions','isCadastro'],
  
    data() {
      return {
        fab: false
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">

</style>
