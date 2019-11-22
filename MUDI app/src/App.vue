<template>
  <div id="app">
    <NavBar/>
    <NotificationContainer/>
    <router-view :key="$route.fullPath" />
    <Footer/>
  </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'
import users from "./assets/users.json";
import help from "./assets/services.json";
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    NotificationContainer,
    Footer
  },
  created(){
      //initalize application state on application very first load
    if(!localStorage.getItem('users')){
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    if(!localStorage.getItem('services')){
        localStorage.setItem('services', JSON.stringify(help));
    }
  }
}
</script>

