<template>
  <v-container class="grey lighten-5">
    <div style="display:grid; gap: 20px; grid-template-columns: 1fr 1fr 1fr;">
      <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="280"
      v-for="(product, id) in products"
      :key="id"
      >
      <template slot="progress">
        <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
        ></v-progress-linear>
      </template>
      
      <v-img
      height="250"
      :src="product.images[0]"
      ></v-img>
      
      <v-card-title>{{ product.brand}}</v-card-title>
      
      <v-card-text>
        <v-row
        align="center"
        class="mx-0"
        >
        
        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>
      
      <div class="my-4 text-subtitle-1">
        {{ product.title }}
      </div>
      
      <div>{{ product.description}}.</div>
    </v-card-text>
    
    <v-divider class="mx-4"></v-divider>
  </v-card>
</div>

</v-container>

</template>

<script>
import api from "../../services/api"
import { required, minLength, } from 'vuelidate/lib/validators'

export default {
  name: 'HomeView',
  data(){
    return{
      products:[],
      validations: {
        name: {
          required,
          minLength: minLength(4)
        },
        password: {
          required,
          minLength: minLength(6)
        },
      }
      
    }
  },
  created(){
    this.getProductss()
  },
  methods:{
    async getProductss(){
      try{
        const { data } = await api.getProducts();
        this.products = data.products
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>
