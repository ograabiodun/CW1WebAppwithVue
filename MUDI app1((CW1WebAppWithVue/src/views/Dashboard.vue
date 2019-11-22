<template>
  <div class="container mt-4">
    
    <div class="mx-auto" style="color:white">
      <h3>Search for extra curricula classes</h3>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter search text" v-model="searchQuery">
      </div>
      <form class="form-inline row">
        <div class="col-md-4 ">
          <label class="my-1 mr-2 w-100">Filter By Subject Area</label>
          <select class="w-100 custom-select my-1" v-model="subjectArea">
            <option selected>Choose...</option>
            <option value="agriculture">Agriculture</option>
            <option value="health">Health</option>
            <option value="arts">Arts</option>
          </select>
        </div>
        
        <div class="col-md-4">
          <label class="my-1 mr-2">Filter By Length</label>
          <select class="w-100 custom-select my-1 mr-sm-2" v-model="timeLength">
            <option selected>Choose...</option>
            <option value="15">less than 15 mins</option>
            <option value="30">less than 30 mins</option>
            <option value="45">less than 45 mins</option>
            <option value="60">less than 60 mins</option>
          </select>
        </div>
        
        <div class="col-md-4">
          <label class="my-1 mr-2">Filter By type</label>
          <select class="w-100 custom-select my-1 mr-sm-2" v-model="type">
            <option selected>Choose...</option>
            <option value="individual">Individual</option>
            <option value="group">Group</option>
          </select>
        </div>
        
        <div class="col-md-12">
          <button type="submit" style="background-color:black; height:50px; font-size:25px;" class="btn btn-primary w-75% btn-block  my-4" @click.prevent="search">Search</button>
        </div>
      </form>
      
      <section v-if="results ? results.length : null">
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <a class="navbar-brand" href="#"> {{isResult ? 'Results for ' + searchQuery : 'All classes & activities'}}</a>
          
          <div class="collapse navbar-collapse  ml-auto" id="navbarSupportedContent">
            <div class="navbar-nav ml-auto d-flex align-center">
              <label class="my-1 mr-2">Sort</label>
              <select class="w-100 custom-select my-1 mr-sm-2" v-model="sortVal" @change="sortResult">
                <option selected>Choose...</option>
                <option value="price" >price</option>
                <option value="review" >review</option>
              </select>
            </div>
          </div>
        </nav>
        <div class="mt-2 row">
          <Result v-for="(result, i) in results" :key="i" :result="result"></Result>
        </div>
      </section>
      
      <section v-else>
        <h3> No Activity or Class found</h3>
      </section>
    
    
    </div>
  </div>
</template>
<script>
    import Result from '@/components/Result';

    export default {
        data() {
            return {
                dropdown: false,
                searchQuery: '',
                subjectArea: '',
                timeLength: '',
                type: '',
                results: null,
                isResult: false,
                sortVal: ''
            }
        },
        components: {
            Result
        },
        methods: {
            //generic search
            search() {
                let services = JSON.parse(localStorage.getItem('services'));
                this.results = services.filter(service => service.title.toLowerCase().includes(this.searchQuery.toLowerCase()));

                if (this.results.length >= 1) {
                    this.isResult = true;
                    //check to apply subject area filters
                    if (this.subjectArea) {
                        this.results = this.results.filter(result => result.area === this.subjectArea);
                    }

                    //check to apply duration filters
                    if (this.timeLength) {
                        this.results = this.results.filter(result => result.length <= this.timeLength);
                    }

                    //check to apply type filters
                    if (this.type) {
                        this.results = this.results.filter(result => result.orientation === this.type);
                    }

                } else {
                    alert('No class or activity found');
                }
            },
            sortResult(){
                //return alert('hey')
                if(this.sortVal === 'price'){
                    this.results.sort(function(a, b){return a.price - b.price});
                } else{
                    this.results.sort(function(a, b){return b.rating - a.rating });
                }
                
            }
        },
        mounted() {
            this.results = JSON.parse(localStorage.getItem('services'));
        }
    }
</script>
<style>
</style>