<template>
<div>
    <navbar></navbar>
    <div class="content">
    <Siderbar></Siderbar>
    <div v-for="posts in posts " :key="posts.id">
       
        {{ posts.userId }}
       
    </div>
    </div>
    <Footer class="contentfooter"></Footer>
</div>
</template>
<style >

.contentfooter{
    display: flex;
    margin-top:600px;
}
</style>
<script>
import Siderbar from '../components/Siderbar.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
export default{
    data(){
        return{
            posts:null
        }

    },
    methods(){
        
    },
    computed:{
    },
    components:{
        Siderbar,
        Navbar,
        Footer
    },
    mounted() {  
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            this.posts = response.data
        })
    },
}
</script>