import axios from "axios";
import {ref} from "vue";
const category = ref(null)
const blogs= ref(null)
const postList = ref(null)

const BASE_URL='https://basic-blog.teamrabbil.com/api/'
getCategory()
getBlog()
getBloglist()
//get category
async function getCategory(){
    let url = `${BASE_URL}post-categories`
    let response = await axios.get(url)
    //console.log(response.data)
     category.value= response.data

}

async function getBlog(){
    let url = `${BASE_URL}post-newest`
    let response = await axios.get(url)
    blogs.value= response.data

}

async function getBloglist(){
    let url = `${BASE_URL}post-list/2`
    let response = await axios.get(url)
    postList.value= response.data

}

export default {category,blogs,postList }