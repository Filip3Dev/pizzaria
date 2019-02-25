<template>
    <div class="pedidosBackground">
        <div class="row items-center justify-center q-pt-lg">
            <div class="col-md-7 col-xs-11">
                <q-card color="white" text-color="black">
                    <q-card-main>
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <h4 class="text-center q-mt-md q-mt-none" v-if="$q.platform.is.desktop">
                                    <b>
                                        Personalize a sua pizza !
                                    </b>
                                </h4>
                                <h3 class="text-center q-mt-md q-mt-none" v-if="$q.platform.is.mobile">
                                    <b>
                                        Personalize a sua pizza !
                                    </b>
                                </h3>
                                <br v-if="$q.platform.is.desktop">
                                <h5 class="text-center">
                                    Escolha os adicionais
                                </h5>
                                <ul class="sizes">
                                    <li @click="callSize(x)" v-for="(x, i) in aditionals" :key="i" v-bind:class="{ activer: x.active }">
                                        <q-chip color="red-12" v-if="x.tempo != '0'">
                                            +{{x.tempo}} Min
                                        </q-chip>
                                        <figure>
                                            <div>
                                                <img :src="x.url" :alt="x.name">
                                            </div>
                                            <figcaption>
                                                <p>
                                                    {{x.name}} <span v-if="x.valor != '0'">({{x.valor | currency}})</span>
                                                </p>
                                            </figcaption>
                                        </figure> 
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12 col-xs-12 text-center">
                                <q-btn label="Finalizar pedido" class="pedidoBtn" @click="nextStep"/>
                            </div>
                        </div>
                        <br>
                    </q-card-main>
                </q-card>
            </div>
        </div>
    </div>
</template>


<script>
import validate from "../utils/validate.js"
export default {
    name: 'Sections',
    data () {
        return {
            opened: false,
            selected:{
                aditional: []
            },
            aditionals: [
                {
                    url: 'statics/bacon.png',
                    type: 'bacon',
                    name: 'Extra Bacon',
                    valor: 3,
                    tempo: 0,
                    active: false
                },
                {
                    url: 'statics/onion.png',
                    type: 'sem_cebola',
                    name: 'Sem Cebola',
                    valor: 0,
                    tempo: 0,
                    active: false
                },
                {
                    url: 'statics/borda-recheada.jpg',
                    type: 'borda',
                    name: 'Borda Recheada',
                    valor: 5,
                    tempo: 5,
                    active: false
                }
            ]
        }
    },
    methods: {
        callSize(size){
            size.active = !size.active
            this.addType(size.type)
        },
        addType(type){
            let array = this.selected.aditional
            if (this.selected.aditional.length != 0) {
                var index = array.indexOf(type);
                if (index !== -1){
                    array.splice(index, 1);
                }else{
                    this.selected.aditional.push(type)    
                }
            }else{
                this.selected.aditional.push(type)
            }
        },
        nextStep(){
            // validate.verifySizeFlavor(this.selected)
            this.$store.dispatch('setAdicional', this.selected.aditional);
            this.$router.push('/resumo-pedido')
        }
  }
}
</script>

<style src="../assets/adicional.sass" lang="sass" scoped></style>
