<script setup>

import AppNAv from "@/components/AppNAv.vue";
import apiOperation from './Data/data.js'
import BlogTemplate from "@/components/BlogTemplate.vue";
import AppFooter from "@/components/AppFooter.vue";
let category =apiOperation.category
</script>

<template>
   <AppNAv
      :category="category"
   />
  <BlogTemplate/>
  <AppFooter/>
</template>

<style scoped>

</style>
