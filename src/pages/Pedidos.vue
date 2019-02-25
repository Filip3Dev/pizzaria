<template>
    <div class="pedidosBackground">
        <div class="row items-center justify-center q-pt-lg">
            <div class="col-md-7 col-xs-11">
                <q-card color="white" text-color="black">
                    <q-card-main>
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <h4 class="text-center q-mt-md q-mt-none">
                                    <b>
                                        Monte a pizza você mesmo !
                                    </b>
                                </h4>
                                <br v-if="$q.platform.is.desktop">
                                <h5 class="text-center">
                                    Escolha o tamanho 
                                </h5>
                                <ul class="sizes">
                                    <li @click="callSize(x)" v-for="(x, i) in sizes" :key="i" v-bind:class="{ activer: x.active }">
                                        <figure>
                                            <img :src="x.url" :alt="x.name">
                                            <figcaption>
                                                <p>
                                                    {{x.name}} ({{x.valor | currency}})
                                                </p>
                                                <p>Tempo de preparo: {{x.tempo}} Min</p>
                                            </figcaption>
                                        </figure> 
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12 col-xs-12">
                                <h5 class="text-center">
                                    Escolha o seu sabor 
                                </h5>
                                <ul class="flavors">
                                    <li @click="callFlavor(x)" v-for="(x, i) in flavors" :key="i" v-bind:class="{ activer: x.active }">
                                        <q-chip color="red-12" v-if="x.tempo != '0'">
                                            +{{x.tempo}} Min
                                        </q-chip>
                                        <figure>
                                            <div>
                                                <img :src="x.url" :alt="x.name">
                                            </div>
                                            <figcaption>
                                                <p>
                                                    {{x.name}}
                                                </p>
                                            </figcaption>
                                        </figure> 
                                    </li>
                                </ul>
                                <br v-if="$q.platform.is.desktop">
                            </div>
                            <div class="col-md-12 col-xs-12 text-center">
                                <q-btn label="Proximo Passo" class="pedidoBtn" @click="nextStep"/>
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
                size: null,
                price: null,
                time: null,
                flavors: null,
                add_time: null
            },
            sizes: [
                {
                    url: 'statics/forma_pizza.png',
                    size: 'pequena',
                    name: 'Pequena',
                    valor: 20,
                    tempo: 15,
                    active: false
                },
                {
                    url: 'statics/forma_pizza.png',
                    size: 'media',
                    name: 'Média',
                    valor: 30,
                    tempo: 20,
                    active: false
                },
                {
                    url: 'statics/forma_pizza.png',
                    size: 'grande',
                    name: 'Grande',
                    valor: 40,
                    tempo: 25,
                    active: false
                }
            ],
            flavors: [
                {
                    url: 'statics/calabre.jpg',
                    flavor: 'calabresa',
                    name: 'Calabresa',
                    tempo: '0',
                    active: false
                },
                {
                    url: 'statics/marguerita.jpg',
                    flavor: 'marguerita',
                    name: 'Marguerita',
                    tempo: '0',
                    active: false
                },
                {
                    url: 'statics/portuguesa.jpg',
                    flavor: 'portuguesa',
                    name: 'Portuguesa',
                    tempo: '5',
                    active: false
                }
            ]
        }
    },
    methods: {
        callSize(size){
            this.sizes.forEach(element => {
                element.active = false
            });
            size.active = true
            this.selected.size = size.size
            this.selected.price = size.valor
            this.selected.time = size.tempo
        },
        callFlavor(flavor){
            this.flavors.forEach(element => {
                element.active = false
            });
            flavor.active = true
            this.selected.flavors = flavor.flavor
            this.selected.add_time = flavor.tempo
        },
        nextStep(){
            validate.verifySizeFlavor(this.selected)
            this.$store.dispatch('setPizza', this.selected);
            this.$router.push('/personalizar-pedido')
        }
  }
}
</script>

<style src="../assets/pedidos.sass" lang="sass" scoped></style>
