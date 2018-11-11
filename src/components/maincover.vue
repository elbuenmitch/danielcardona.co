<template>
  <div class="maincover">

    <div id="top-header">

        <!-- <div class="full-screen-img" :style="{ 'backgroundImage': `url(${require('../assets/de_espaldas1.jpg')})`}"></div> -->
        <div class="full-screen-img" :style="{ 'background-image': 'url(' + bgImage + ')'}"></div>
        
        <div v-if="titleOrientation == 'vertical'">
            <div class="main-cover-wrapper-vertical">
                <h1 class="main-cover-title-vertical">{{mainTitle}}</h1>
                <h3 class="main-cover-subtitle-vertical">{{subtitle}}</h3>
            </div>
        </div>
        <div v-if="titleOrientation == 'horizontal'">
            <div class="main-cover-wrapper-horizontal">
                <h1 class="main-cover-title-horizontal">{{mainTitle}}</h1>
                <h3 class="main-cover-subtitle-horizontal">{{subtitle}}</h3>
            </div>
        </div>
    </div>

  
    
    
    
    
  </div>
</template>

<script>
export default {
  name: 'maincover',
  props: ['bgImage', 'mainTitle', 'subtitle', 'titleOrientation'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
