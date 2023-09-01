import axios from "axios";
import {ref} from "vue";
const category = ref(null)
const blogs= ref(null)
const postList = ref(null)
const loadingFlagf= ref(true)

 const BASE_URL='https://basic-blog.teamrabbil.com/api/'
getCategory()
getBlog()
getBloglist()
//get category
async function getCategory(){
    let url = `${BASE_URL}post-categories`
    let response = await axios.get(url)
     category.value= response.data

}

export async function getBlog(){
    let url = `${BASE_URL}post-newest`
    let response = await axios.get(url)
    if(response.status===200){
        blogs.value= response.data
        loadingFlagf.value=false
    }



}

async function getBloglist(){
    let url = `${BASE_URL}post-list/2`
    let response = await axios.get(url)
    postList.value= response.data

}

export default {category,blogs,postList,loadingFlagf,BASE_URL }