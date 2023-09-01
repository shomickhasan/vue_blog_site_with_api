<script setup>

import AppFooter from "@/components/AppFooter.vue";
import AppNAv from "@/components/AppNAv.vue";
import apiOperation from "@/Data/data";
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import SideList from "@/components/SideList.vue";
let category =apiOperation.category
const BASE_URL = apiOperation.BASE_URL
let catData = []
let route = useRoute()
const categoryWiseData= onMounted(async function (id){
   catData = []
  let url= BASE_URL+'post-newest'
  let response = await axios.get(url)
  if(response.status===200){
     response.data.forEach(function(data){
       if(data.category_id==id){
         catData.push(data)
       }
     })
  }

})
categoryWiseData(route.params.id)
console.log('=====>',catData)

</script>
<template>
  <AppNAv
      :category="category"
  />
  <div class="loader" v-if="catData.length===0">
      <div class="spinner-border" role="status">
        <span  class="  visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row mt-4">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4 mt-3" v-for="(item,index) in catData" :key="index">
              <div class="card">
                <img :src="item.img" class="card-img-top" alt="Blog Post Image" height="250">
                <div class="card-body">
                  <h5 class="card-title">{{item.title}}</h5>
                  <p class="card-text">{{item.short}}</p>
                  <router-link :to="`/post-details/${item.id}`"  class="btn btn-primary button">Read More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 mt-3">
<!--          <SideList
              title="Recent Posts"
              :sidelist="sidelist"
          />-->
        </div>
      </div>
    </div>
</template>

<style scoped>
.loader{
  text-align: center;
  height: 400px;

}
.loader .spinner-border{
  height: 8rem;
  width: 8rem;
  margin-top: 10%;
  color: #6e99e6;

}
</style>