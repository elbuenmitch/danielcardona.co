<template>
  <div class="navbar fixed">
    <ul class="navbar-nav">
        <router-link class="nav-item" v-for="routes in links" 
            v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'BIO',
          page:'/'
        },
        {
          id: 1,
          text: 'BLOG',
          page:'/blog'
        },
        {
          id: 2,
          text: 'TECH PROJECTS',
          page:'/techprojects'
        },
        {
          id: 3,
          text: 'READING AS A HABIT',
          page:'/reading'
        }
      ]
    }
  }
}
</script>
<style>

</style>