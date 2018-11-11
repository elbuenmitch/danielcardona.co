<template>
    <div class="professional-profile-card">
        <div class="professional-profile-card-wrapper">
            <div class="professional-profile-card-image-wrapper first-col first-row">
                <img class="professional-profile-card-image" :src="cardContent.bgImage" alt="hola ">
            </div>
            <div class="professional-profile-card-info-wrapper second-col first-row"> 
                <h1 class="professional-profile-card-title first-row">{{cardContent.mainTitle}}</h1>
                <p class="professional-profile-card-text second-row">{{cardContent.text}}</p>
                <!-- link 1 -->
                <div class="professional-profile-card-link-wrapper third-row" v-bind:class="isSingleColumn">
                    <!-- inkTwoText !== undefined ? first-col : fist-col-span -->
                    <router-link class="professional-profile-card-link" :to="cardContent.linkOneURL">{{cardContent.linkOneText}}</router-link>
                    <p class="professional-profile-card-link-subtext">{{cardContent.linkOneSubText}}</p>
                </div>
                <!-- link 2 -->
                <div v-if="cardContent.linkTwoText !== undefined" class="professional-profile-card-link-wrapper third-row second-col">
                    <router-link class="professional-profile-card-link" :to="cardContent.linkTwoURL">{{cardContent.linkTwoText}}</router-link>
                    <p class="professional-profile-card-link-subtext">{{cardContent.linkTwoSubText}}</p>
                </div>
            </div>
        </div>

    </div>



</template>



<script>
export default {
    name: 'ProfessionalProfileCard',
    props: [
        'cardContent'
    ],
    data(){
        return{
         
        }
    },
    computed: {
        // a computed getter
        isSingleColumn: function () {
            // `this` points to the vm instance
            if(this.cardContent.linkTwoText !== undefined){
                return 'first-col';
            } else {
                // console.log('a', this.cardContent.linkTwoText);
                return 'first-col-span';
            }
        }
    }

}
</script>

<style >


</style>


