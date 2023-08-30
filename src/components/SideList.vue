<script setup>
    const props = defineProps({
      title:{
        type:String,
        default:'Title'
      },
      sidelist:{
        type:Object,
        default:null,
      }
    })
</script>

<template>
  <div class="sidebar bg-primary">
    <h3 class="sidebar-title">{{props.title}}</h3>
    <ul class="sidebar-list" v-for="(item,index) in sidelist " :key="index">
      <li><a href="#">{{item.title}}</a></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  background: linear-gradient(105deg,#6e99e6 ,#093c94);
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.sidebar-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}
.sidebar-list {
  list-style: none;
  padding: 0;
}
.sidebar-list li {
  margin-bottom: 1rem;
}
.sidebar-list a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;
}
.sidebar-list a:hover {
  color: #ffc107;
}
</style>