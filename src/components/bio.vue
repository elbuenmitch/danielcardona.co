<template>
  <div class="bio">

    <maincover bgImage="http://danielcardona.co/img/de_espaldas_light.jpg"
               mainTitle="DANIEL CARDONA"
               subtitle="BUSINESS STRATEGY - CODING - DESIGN"
               titleOrientation="vertical"></maincover>

    <div class="dark-background full-width">
      <div class="image-holder">
        <img class="section-transition-icon" src="../assets/arrow_down.png" alt="arrow_down">
      </div>
      <div class="text-section-container">
        <h1 class="text-section-title">HELLO! <span class="navbar-highlighted">HOLA!</span> こんにちは！</h1>
        <p class="text-block last-paragraph">Thank you so much for stoppping by. It took me a while to put this site together and so I feel compelled that you’re here. <br><br> But yeah, you didn’t come to read my greetings, so let’s get into it. This site is about me. Well, it has my name on the URL. Daniel Cardona. Yeah, Daniel Cardona. See. My mother told me I was going to be a good guy until one day I simply started being the way I ultimately turned out being and well... there’s that.
        <br><br>I’m not sure what I’m doing now. </p>
      </div>
    </div>

    <div class="clear-background full-width">
      <div class="card-container">
        <h1 class="card-container-main-title">PROFESSIONAL PROFILE</h1>

        
        <div v-for="content in professionalCardData">
          <ProfessionalProfileCard :cardContent=content></ProfessionalProfileCard>
        </div>

                
      </div>
    </div>

    <div class="dark-background full-width">
        <h1 class="card-container-main-title-dark">PAST WORK</h1>
      <div class="card-container card-container-dark">

        <div v-for="content in pastWorkCardData">
          <PastWorkCard :cardContent=content></PastWorkCard>
        </div>

                
      </div>
    </div>
    
  </div>
</template>

<script>
import maincover from './maincover'
import ProfessionalProfileCard from './visual_components/ProfessionalProfileCard'
import PastWorkCard from './visual_components/PastWorkCard'
export default {
  name: 'bio',
  components: {
    'maincover': maincover,
    'ProfessionalProfileCard': ProfessionalProfileCard,
    'PastWorkCard': PastWorkCard,
  },
  data () {
    return {
      professionalCardData: [
        {
          mainTitle:"BUSINESS STRATEGIST",
          linkOneText:"READING AS A HABIT",
          linkOneSubText:"book reviews",
          linkOneURL:"reading",
          linkTwoText:"CONNECTING THE DOTS",
          linkTwoSubText:"business strategy posts",
          linkTwoURL:"blog",
          text:"For as long as companies are run by humans, business strategy comes down to breaking down human relationships and grasping incentive schemes.",
          bgImage:"http://danielcardona.co/img/biztrategist_small.png",
        },
        {
          mainTitle:"PROGRAMMER",
          linkOneText:"SCRATCHING MY OWN BACK",
          linkOneSubText:"web and design portfolio",
          linkOneURL:"techprojects",
          text:"There is something remarkable about the fact that we live in a world invaded by technology and connectivity. It's no joke when they say that 'programming is a superpower'.",
          bgImage:"http://danielcardona.co/img/biztrategist_small.png",
        },
        {
          mainTitle:"PHOTOGRAPHER / DESIGNER",
          linkOneText:"PORTFOLIO",
          linkOneSubText:"photography and design portfolio",
          linkOneURL:"update this!",
          text:"One day I woke up and realized my camera was an itching par of my body. Ever since that day, I can't go anywhere without it. It simply overpowers me.",
          bgImage:"http://danielcardona.co/img/biztrategist_small.png",
        },
        {
          mainTitle:"FINANCE GUY",
          linkOneText:"PAST WORK",
          linkOneSubText:"very serious stuff",
          linkOneURL:"techprojects",
          text:"Although I have moved on from the financial world, I owe much of my professional growth to those challenging begginings.",
          bgImage:"http://danielcardona.co/img/biztrategist_small.png",
        },
        {
          mainTitle:"FATHER / HUSBAND",
          linkOneText:"MY FAMILY",
          linkOneSubText:"the underlying reason",
          linkOneURL:"techprojects",
          text:"Motivated by this group of people I have a very strict routine that hopefully will help me achieve great things so that I can provide them with the best of the best.",
          bgImage:"http://danielcardona.co/img/biztrategist_small.png",
        },
      ],
      pastWorkCardData: [
        {
          companyName:"PORVENIR",
          position:"TRADER AND PORTFOLIO MANAGER",
          coreSkills:"Capital Markets, asset valuation, finmath",
          achievement: "Made a bunch of money for the portfolios and asset classes under my responsibility. Automated the hell out of my daily tasks using Macros in Excel that directly queried the database with complex SQL queries.",
          // logo:"https://via.placeholder.com/150",
          // logo: "~src/assets/porvenir_logo.png",
          logo: "porvenir_logo.png",
          // logo: "porvenir_logo.png",
          // logo: "../../assets/porvenir_logo.png",
          // logo: "../../assets/porvenir_logo.png", //this worked by directly requiring the image... not requiring frmo a variable
          bgImage:"porvenir_bgd.jpg",
          date: "2011-2013",
        },
        {
          companyName:"NEXTREMER",
          position:"VP OF INTL. STRATEGY",
          coreSkills:"Marketing, Business Strategy, Web Development",
          achievement:"Helped the company estabhisl the SaaS product in the AI Robotics division.",
          // logo:"https://via.placeholder.com/150",
          // logo: "static/nextremer_logo.png",
          logo: "nextremer_logo.png",
          bgImage:"nextremer_bgd.jpg",
          date:"2016/11 - Present",
        },
        {
          companyName:"PORVENIR",
          position:"TRADER AND PORTFOLIO MANAGER",
          coreSkills:"Capital Markets, asset valuation, finmath",
          achievement: "Made a bunch of money for the portfolios and asset classes under my responsibility. Automated the hell out of my daily tasks using Macros in Excel that directly queried the database with complex SQL queries.",
          // logo:"https://via.placeholder.com/150",
          // logo: "~src/assets/porvenir_logo.png",
          logo: "porvenir_logo.png",
          // logo: "../../assets/porvenir_logo.png",
          // logo: "../../assets/porvenir_logo.png", //this worked by directly requiring the image... not requiring frmo a variable
          bgImage:"nextremer_bgd.jpg",
          date: "2011-2013",
        },
        {
          companyName:"NEXTREMER",
          position:"VP OF INTL. STRATEGY",
          coreSkills:"Marketing, Business Strategy, Web Development",
          achievement:"Helped the company estabhisl the SaaS product in the AI Robotics division.",
          // logo:"https://via.placeholder.com/150",
          // logo: "static/nextremer_logo.png",
          logo: "nextremer_logo.png",
          bgImage:"nextremer_bgd.jpg",
          date:"2016/11 - Present",
        },
        {
          companyName:"PORVENIR",
          position:"TRADER AND PORTFOLIO MANAGER",
          coreSkills:"Capital Markets, asset valuation, finmath",
          achievement: "Made a bunch of money for the portfolios and asset classes under my responsibility. Automated the hell out of my daily tasks using Macros in Excel that directly queried the database with complex SQL queries.",
          // logo:"https://via.placeholder.com/150",
          // logo: "~src/assets/porvenir_logo.png",
          logo: "porvenir_logo.png",
          // logo: "../../assets/porvenir_logo.png",
          // logo: "../../assets/porvenir_logo.png", //this worked by directly requiring the image... not requiring frmo a variable
          bgImage:"nextremer_bgd.jpg",
          date: "2011-2013",
        },
        {
          companyName:"NEXTREMER",
          position:"VP OF INTL. STRATEGY",
          coreSkills:"Marketing, Business Strategy, Web Development",
          achievement:"Helped the company estabhisl the SaaS product in the AI Robotics division.",
          // logo:"https://via.placeholder.com/150",
          // logo: "static/nextremer_logo.png",
          logo: "nextremer_logo.png",
          bgImage:"nextremer_bgd.jpg",
          date:"2016/11 - Present",
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
