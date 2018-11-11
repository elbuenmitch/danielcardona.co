<template>
  <div id="app">
    <Navigation></Navigation>

    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
  },
  data() {
    return{

    }
  },
  methods: {

  },
  updated: function(){

  }
}
</script>

<style>

</style>
