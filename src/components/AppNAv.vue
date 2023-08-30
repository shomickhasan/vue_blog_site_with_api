<script setup>
  const props = defineProps({
    category:{
      type: Object,
      default: null
    }
  })

  console.log(props.category)
</script>

<template>
  <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-for="(category,index) in props.category" :key="index">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">{{category.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar{
    background: linear-gradient(105deg,#6e99e6 ,#093c94);
  }
</style>