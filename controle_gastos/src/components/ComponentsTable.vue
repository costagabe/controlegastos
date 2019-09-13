<template lang="html">
  <section>
    <div  v-for="(row, i) in this.data" :index="i" :key="i">
        <v-layout row justify-center wrap :class="`mb-4 pa-3 project ${row.status}`">
           <v-col   v-for="column in row.columns" :cols="column.xs"    :md="column.md" :xl="column.xl" :sm="column.sm" :lg="column.lg" >
            <div class="caption grey--text ">{{  column.title   }} </div>
            <div>{{ column.content }}</div>
            <v-divider></v-divider>
          </v-col>
        </v-layout>
      </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "ComponentsTable",
  props: ["keys", "data"],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.project.complete {
  background:rgba(0, 253, 84, 0.15);
  border: 2px solid rgba(0, 253, 84,0.4);
}
.project.ongoing {
  background:rgba(255, 38, 0, 0.15);
  border: 2px solid rgba(255, 38, 0, 0.4);
}
.project.overdue {
  border-left: 2px solid #f83e70;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
