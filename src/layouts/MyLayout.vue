<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen
    }
  },
  methods: {
    
  }
}
</script>

<style>
</style>
