<template>
    <div class="sectionBackground" v-if="$q.platform.is.desktop">
        <div class="row">
            <div class="col-md-12 col-xs-12">
                <div class="textCard">
                    <h3 class="text-center q-mb-none">
                        <b>
                            Monte sua pizza agora mesmo !
                        </b>
                    </h3>
                    <h5 class="text-center q-mt-xs q-mb-none">
                        <b>
                        &
                        </b>
                    </h5>
                    <h4 class="text-center q-mt-none">
                        <b>
                            Receba em um piscar de olhos
                        </b>
                    </h4>
                </div>
            </div>
            <div class="col-md-12  col-xs-12 text-center">
                <q-btn label="Peça Agora" class="pedidoBtn" v-scroll-fire="bounceImage" @click="callModal"/>
            </div>
        </div>
    </div>
</template>


<script>
import { Platform } from 'quasar'
export default {
    name: 'Sections',
    data () {
        return {
            opened: false
        }
    },
    methods: {
    callModal(){
        this.opened = true
        this.$router.push('/pedidos')
    },
    bounceImage (element) {
      element.classList.add('animate-bounce')
      setTimeout(() => {
        if (document.body.contains(element)) {
          element.classList.remove('animate-bounce')
        }
      }, 2000)
    }
  }
}
</script>

<style src="../assets/home.sass" lang="sass" scoped></style>
