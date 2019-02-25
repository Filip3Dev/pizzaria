<template>
    <div class="pedidosBackground">
        <div class="row items-center justify-center q-pt-lg">
            <div class="col-md-6 col-xs-11">
                <q-card color="white" text-color="black">
                    <q-card-main>
                        <div class="row">
                          <div class="col-md-12 col-xs-12">
                            <h4 class="text-center q-mt-md q-mb-xs">
                              <b>
                                Detalhes do seu pedido !
                              </b>
                            </h4>
                            <br>
                            <h5 class="text-center q-mt-none">
                              <b>
                                Pizzaria UDS
                              </b>
                            </h5>
                            <br>
                            <table class="table table-striped table-bordered diffTable">
                              <tbody>
                                <tr>
                                  <td>
                                    Tamanho
                                  </td>
                                  <td class="captalize">
                                    {{pizza.size}}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Sabor
                                  </td>
                                  <td class="captalize">
                                    {{pizza.flavors}}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Personalizações
                                  </td>
                                  <td>
                                    {{nomes}}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Valor total
                                  </td>
                                  <td>
                                    {{resume.valor | currency}}
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    Tempo de preparo
                                  </td>
                                  <td>
                                    {{resume.tempo}} Minutos
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="col-md-12 text-center">
                            <br>
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
import { mapGetters } from "vuex";
export default {
  name: 'Sections',
  data () {
      return {
          opened: false,
          resume: {
            valor: 0,
            tempo: 0,
          },
          nomes: '',
          meta: null
      }
  },
  created() {
    this.callAditionals()
  },
  methods: {
    callSize(size){
        size.active = !size.active
        this.addType(size.type)
    },
    callAditionals(){
        let adicionais = this.adicional

        const adds = []
        let names = ''

        adicionais.forEach(element => {
          this.aditionals.forEach(iten => {
            if (element == iten.type) {
              adds.push(iten);
              names += iten.name + ", "
              try {
                this.resume.tempo += parseInt(iten.tempo)
                this.resume.valor += parseInt(iten.valor)
              } catch (error) {
                
              }
            }
          });
        });
        this.nomes = names;
        this.resume.tempo += parseInt(this.pizza.add_time)
        this.resume.tempo += parseInt(this.pizza.time)
        this.resume.valor += parseInt(this.pizza.price)
    },
  },
  computed: {
    ...mapGetters(['pizza', 'adicional', 'aditionals'])
  },
}
</script>

<style src="../assets/resumo.sass" lang="sass" scoped></style>
