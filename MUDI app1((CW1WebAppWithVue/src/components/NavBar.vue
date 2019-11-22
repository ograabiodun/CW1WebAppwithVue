<template>
  <!--<div id="nav" class="nav">
    <router-link to="/" class="brand">Real World Events</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </nav>
  </div>-->
  <div class="wrapper row1" style="background-color:aqua;">
  <header id="header" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <div id="logo" class="fl_left">
      <h1><a href="/">MUDI app</a></h1>
    </div>
    <nav id="mainav" class="fl_right">  
      <ul class="clear">
        <li class="active"><router-link to="/">Home</router-link></li> 
        <li><router-link to="/dashboard" v-if="isAuth">Dashboard</router-link></li>
        <li>
          <a style="cursor: pointer" v-if="isAuth"  class="nav-link" @click="logout">Logout</a>
            <router-link v-else class="nav-link" to="/signup">Login</router-link>
        </li>
        
      </ul>
    </nav>
    <!-- ################################################################################################ -->
  </header>
</div>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
    <div class="container">
      <router-link class="navbar-brand text-white" to="/">Curriculum</router-link>
      
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link " to="/">Home</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link " to="/dashboard" v-if="isAuth">Dashboard</router-link>
          </li>
  
          <li class="nav-item">
            <a style="cursor: pointer" v-if="isAuth"  class="nav-link" @click="logout">Logout</a>
            <router-link v-else class="nav-link" to="/signup">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<script>
  import {mapGetters} from 'vuex'
  
    export default {
        computed:{
          isAuth(){
            return this.$store.getters.isAuth;
          }
        },
      methods:{
        logout(){
          console.log('lodgout');
          this.$store.commit('UNSET_USER');
          this.$router.push('/');
        }
      }
    }
</script>