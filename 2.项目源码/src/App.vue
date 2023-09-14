<template>
  <div id="app">
    <VueHeader/>
    <router-view></router-view>
    <VueFooter/>
  </div>
</template>

<script>
import VueHeader from '@/components/VueHeader.vue'
import VueFooter from '@/components/VueFooter.vue'

export default {
  name:'app',
  components:{
    VueHeader,
    VueFooter
  },
  data(){
    return{}
  }
}

</script>

<style>

</style>
