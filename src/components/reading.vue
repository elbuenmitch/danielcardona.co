<template>
  <div class="reading">

    <div id="top-header">
      <maincover bgImage="http://danielcardona.co/img/reading_light.jpg"
                 mainTitle="READING"
                 subtitle="AS A HABIT"
                 titleOrientation="horizontal"></maincover>
    </div>

  </div>
</template>

<script>
import maincover from './maincover'
export default {
  name: 'reading',
    components: {
    'maincover': maincover,
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
