<script setup>
    import blogs from "@/Data/data.js"
    import SideList from "@/components/SideList.vue";
    const blog = blogs.blogs
    const sidelist = blogs.postList
    console.log(sidelist)
</script>

<template>
  <div class="container mt-5">
    <div class="row mt-4">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4 mt-3" v-for="(item,index) in blog" :key="index">
            <div class="card">
              <img :src="item.img" class="card-img-top" alt="Blog Post Image" height="250">
              <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{item.short}}</p>
                <a href="#" class="btn btn-primary button">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 mt-3">
        <SideList
            title="Recent Posts"
            :sidelist="sidelist"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .button{
    background: linear-gradient(105deg,#6e99e6 ,#093c94);
  }
</style>