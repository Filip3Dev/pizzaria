<template>
  <q-page class="flex flex-center">

    <transition appear
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceInLeft">
      <my-hero></my-hero>
    </transition>

    <my-sections></my-sections>
  </q-page>
</template>

<style>
</style>

<script>
import hero from '../components/Hero'
import sections from '../components/Sections'
export default {
  components: {
    "my-hero": hero,
    "my-sections": sections
  },
  name: 'PageIndex'
}
</script>
