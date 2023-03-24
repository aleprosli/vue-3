<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<script>
//npm install axios
import axios from 'axios'
import {mapGetters, mapActions, mapMutations } from 'vuex'
import store from './store'
import { computed } from '@vue/reactivity'

//export ni defauly
export default {
  // data(){
  //   return {
  //     params: [

  //     ]
  //   }
  // },

//then kena ada method
  // methods: {
  //   //sini declare nama function 
  //   getProductCategory(){
  //     //panggil axios get url , lps response, then -> kita nak buat apa
  //    .then(response => {
  //       //this.params refer array dalam data di atas. response.data kita tgk dalam output yg di fetch dlm console contoh
  //       //response = [data => []]
  //       this.params = response.data
  //       console.log('response', this.params)
  //     })
  //   }
  // },
  methods: {
    ...mapActions({
      getProductCategory: 'getProductCategory'
    })
  },

  //kena mounted
  mounted(){
    //amik nama function yg kita nak declare
    this.getProductCategory()
    // console.log('store', store)
  },

  computed: {
    ...mapGetters({
      data: 'data'
    })
  }
}
</script>

<template>
   <li v-for="item in data">{{ item }}</li>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
