<template>
    <div class="past-work-card">

        <div class="card-wrapper">
            
            <!-- <div class="background-image" :style="{'background-image': 'url(' + require('../../assets/nextremer_bgd.jpg') + ')'}"> -->
                <div class="whiteness">
                
                  
                    <div class="details-button">
                        <h2 class="details-button-text">
                            more info
                        </h2>
                    </div>
                    <div class="logo-section">
                        <img class="imagensita" :src="require(`@/assets/${cardContent.logo}`)" alt="HOLAAAAAA"/>
                    </div>
                    <div class="content-wrapper">

                        <h2 class="past-work-role">{{cardContent.position}}</h2>  
                        <h3 class="past-work-core-skills">{{cardContent.coreSkills}}</h3>  
                        <p class="past-work-achievement">{{cardContent.achievement}}</p>  
                        
                        <h4 class="past-work-date">{{cardContent.date}}</h4>
                        <!-- <h1 class="past-work-company-name">{{cardContent.companyName}}</h1>   -->
                        <!-- <img class="imagensita" :src="require(`@/assets/${cardContent.logo}`)" alt="HOLAAAAAA"/> -->

                        <!-- <img class="logo-back" :src="require(`@/assets/${cardContent.logo}`)" alt="HOLAAAAAA"/> -->






                        <!-- <img class="imagensita" :src="cardContent.logo" alt="HOLAAAAAA"> -->
                        <!-- <h1>{{product.img}}</h1> -->
                        <!-- <img class="imagensita" :src="image" alt="HOLAAAAAA"/> -->
                        <!-- <img class="imagensita" :src="product.img" alt="HOLAAAAAA"/> -->
                        <!-- <img class="imagensita" :src="image" alt="HOLAAAAAA"/> -->
                        <!-- <img class="imagensita" :src="$url('src/assets/classified/'+cardContent.logo)" alt="HOLAAAAAA"> -->

                    </div>

                </div>
                
        </div>

    </div>
</template>



<script>
export default {
    name: 'PastWorkCard',
    props: [
        'cardContent'
    ],
    data(){
        return{
            imagenn: "nextremer_bgd.jpg",
            // imagenn: "../../assets/nextremer_bgd.jpg",
            image: require('../../assets/porvenir_logo.png'),
            // image: require(''+this.cardContent.logo),
            product: {
                name: 'My image',
                img: '../../assets/porvenir_logo.png'
            }
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
        },
        myImage: function(){
            console.log('cardContent.logo', cardContent.logo);
            // require(cardContent.logo)
        }
    }

}
</script>

<style >
.past-work-card:hover{
    transform: scale(1.01);
    transition: transform 0.5s;
}

.card-wrapper{
    width: 270px;
    background : -moz-linear-gradient(50% 100% 90deg,rgba(89, 99, 112, 1) 0%,rgba(123, 141, 160, 1) 100%);
    background : -webkit-linear-gradient(90deg, rgba(89, 99, 112, 1) 0%, rgba(123, 141, 160, 1) 100%);
    background : -webkit-gradient(linear,50% 100% ,50% 25.5% ,color-stop(0,rgba(89, 99, 112, 1) ),color-stop(1,rgba(123, 141, 160, 1) ));
    background : -o-linear-gradient(90deg, rgba(89, 99, 112, 1) 0%, rgba(123, 141, 160, 1) 100%);
    background : -ms-linear-gradient(90deg, rgba(89, 99, 112, 1) 0%, rgba(123, 141, 160, 1) 100%);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#596370', endColorstr='#7B8DA0' ,GradientType=0)";
    background : linear-gradient(0deg, rgba(89, 99, 112, 1) 0%, rgba(123, 141, 160, 1) 100%);
    border-radius : 13px;
    -moz-border-radius : 13px;
    -webkit-border-radius : 13px;
    filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=0, OffY=7.77, Color='#7B7B7B') progid:DXImageTransform.Microsoft.gradient(startColorstr='#7B8DA0',endColorstr='#596370' , GradientType=0);
}
.logo-section{
    background-color: white;
    width: 100%;
    height: 120px;
    display: flex;
}
.whiteness{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
    /* background-size: cover; */
    text-align: center;
    -webkit-box-shadow: 0px 4px 22.68px 3.4px rgba(58, 57, 57, 0.5);
    box-shadow: 0px 4px 22.68px 3.4px rgba(58, 57, 57, 0.5);

}
.content-wrapper{
    max-width: 90%;
    margin: 0 auto;
}
.imagensita{
    width: 230px;
    z-index: 0;
    margin: auto;
    opacity: 0.8;
}

.logo-back{
    width: 470px;
    position: absolute;
    top: 50px;
    left: -116px;
    z-index: -1;
    opacity: 0.05;
}





.past-work-company-name{
    position: relative;
    z-index: 0;
    padding-top: 1rem;
    font-size: 2.5rem;
    color: #fff3ea;
    letter-spacing: -1.5px;
}
.past-work-role{
    position: relative;
    z-index: 0;
    font-family: "Oswald";
    color: #feecb3;
    font-weight: 200;
    font-size: 1.9rem;
    margin-top: 1.8rem;
    line-height: 2rem;
}
.past-work-core-skills{
    position: relative;
    z-index: 0;
    font-family: 'Open Sans', sans-serif;
    color: #ece8e0;
    padding-bottom: 1.1rem;
    font-size: 0.9rem;
    padding-top: 0.5rem;
}
.past-work-achievement{
    position: relative;
    z-index: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    padding-bottom: 1rem;
    color: #fff3ea;
    display: none;
}
.past-work-date{
    position: relative;
    z-index: 0;
    font-size: 1rem;
    font-weight: 200;
    /* color: black; */
    color: #feecb3;
    font-size: 1.2rem;
    margin-bottom: 3rem;
}

.details-button{
    width: 100%;
    background-color: #feecb3;
    position: absolute;
    bottom: 0px;
    height: 35px;
    display: grid;
    align-content: center;
}

.details-button-text{
    color: #7b8da0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    padding-bottom: 2px;
}

.details-button:hover{
    background-color: white;
    transition: background-color 0.5s;
}

.details-button-text:hover{
    color: #596370;
    transition: color 0.5s;

}



</style>


