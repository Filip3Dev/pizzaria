<template>
    <div class="heroBackground">
        <div class="row largeContentHero">
            <div class="col-md-12 col-xs-12">
                <transition appear
                enter-active-class="animated bounceInLeft"
                leave-active-class="animated bounceInLeft">
                    <div class="textCard">
                        <h1 class="heroH1">
                            Pizza pra qualquer tipo de fome
                        </h1>
                        <h1 class="heroH2">
                            Pra qualquer tipo de gosto
                        </h1>
                    </div>
                </transition>
            </div>
            <div class="col-md-12  col-xs-12 text-center" v-if="$q.platform.is.mobile">
                <br>
                <q-btn label="Peça Agora" class="pedidoBtn" @click="callModal"/>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Hero',
    methods: {
        callModal(){
            this.opened = true
            this.$router.push('/pedidos')
        }
    },
}
</script>

<style src="../assets/home.sass" lang="sass" scoped></style>
