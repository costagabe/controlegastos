<template lang="html">

  <section class="cadastro">
    <v-layout row justify-center>
      <v-col xs="10" md="7">
         <v-card class="pa-5">
             <h1 class="text-uppercase text-center headline grey--text"> <span>Cadastro - {{  tipo  }}  </span></h1>
           <v-form v-model="valid">

             <v-layout row justify-center>
                <v-col cols="10">
                  <v-text-field
                    label="Nome"
                    required
                    v-model="nome"
                  />
                 </v-col>
              </v-layout>

              <v-layout row justify-center>
                <v-col cols="10">
                  <v-text-field
                    label="Descrição"
                    required
                    v-model="descricao"
                  />
                 </v-col>
              </v-layout>
            <v-layout row justify-center>
              <v-col cols="10" md="5">
                  <v-color-picker
                    v-model="color"
                    :hide-canvas="true"
                    :hide-mode-switch="true"
                    :hide-inputs="true"
                    mode.sync="hex"
                    :show-swatches="false"
                    class="mx-auto "
              />
                 </v-col>
                <v-col cols="10" md="5">
                  <v-text-field
                    label="Cor"
                    required
                    disabled
                    v-model="this.color.hex"
                  />
                 </v-col>
              </v-layout>
              <v-layout v-if="tipo == 'transacao'" row justify-center>
                <v-col cols="10">
                  <v-select
                    v-model="tipoTransacao"
                    :items="['Despesa','Receita']"
                    :rules="[v => !!v || 'Selecione o tipo']"
                    label="Tipo"
                    required
                  />
                 </v-col>
              </v-layout>
               <v-layout row>
                <v-spacer/><v-btn color="primary"  right class='mr-5'>Enviar</v-btn>
              </v-layout>
              

            </v-form>
        </v-card>
      </v-col>
    </v-layout>
   
  </section>

</template>

<script lang="js">
  export default  {
    name: 'cadastro',
    props: ['tipo'],
    mounted() {
      console.log(this.tipo);
    },
    data() {
      return {
        valid: false,
        color: {},
        tipoTransacao:'',
        nome:'',
        descricao:''
      }
    },
    methods: {
    },
    computed: {
     /* color: {
        get () {
          return this[this.type]
        },
        set (v) {
          this[this.type] = v
        },
      },
      showColor () {
        if (typeof this.color === 'string') return this.color

        return JSON.stringify(Object.keys(this.color).reduce((color, key) => {
          color[key] = Number(this.color[key].toFixed(2))
          return color
        }, {}), null, 2)
      },*/
    },
    } 
  
</script>

<style scoped lang="scss">
</style>
