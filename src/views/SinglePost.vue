<script setup>
import blogs from "@/Data/data";
const sidelist = blogs.postList
import SideList from "@/components/SideList.vue";
import AppNAv from "@/components/AppNAv.vue";
import AppFooter from "@/components/AppFooter.vue";
import apiOperation from "@/Data/data";
import {useRoute} from "vue-router";
import axios from "axios";
import {ref} from "vue";
let category =apiOperation.category
const route = useRoute()
const data= ref({})

async  function postDetails(){
  let url = apiOperation.BASE_URL+'post-details/'+route.params.id
  try{
    let response =await axios.get(url)
    if(response.status===200){
       data.value= response.data
      console.log(data)
    }
  }
  catch (error){
    console.log(error)
  }
}
postDetails()


</script>

<template>
  <AppNAv
      :category="category"
  />
  <div class="error mt-5 p-5" v-if="data.postDetails===null">
    <h6>Opps!! Content Not Available</h6>
  </div>
  <div class="container" v-else>
    <div class="row mt-3">
      <div class="col-md-12">
        <div class="container">
          <div class="single-post">
            <img class="post-image" :src="data.postDetails['img']" alt="Post Image">
             <h1 class="post-title mt-4">{{data.postDetails['title']}}</h1>
            <p>{{data.postDetails['content']}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter/>
</template>

<style scoped>

</style>