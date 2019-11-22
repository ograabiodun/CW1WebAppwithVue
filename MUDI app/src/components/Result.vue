<template>

  <div class="col-md-4 mb-9" >
  <section class="hoc container clear"> 
    
    <!-- <div class="sectiontitle">
      <h6 class="heading">Diam quis turpis vivamus</h6>
      <p>Viverra quis metus et hendrerit nunc ut aliquam dui.</p>
    </div> -->
    <div class="group latest">
      <article class="one_third first" style="width: auto;"> 
        <img src="@/assets/placeholder.png" class="card-img-top" alt="@/assets/placeholder.png">
        <div class="txtwrap">
          <h6 class="heading">{{result ? result.title : null}}<span
            class="badge badge-success">{{result.type}}</span></h6>
          <time class="font-xs block btmspace-10" datetime="2045-04-11">Wednesday, 11<sup>th</sup> April 2045</time>
          <p>{{ result.description }} .. {{result.area}} [&hellip;]</p>
          <footer>
            <span class="" style="float:right">{{ '$' + result.price }}</span>
            <br/><span
              style="background: url('/star.svg') center center/cover; width: 40px; height: 30px; display:flex; justify-content: center; align-content: center; font-size:20px;"> {{result.rating}} </span> 
            <a @click.prevent="reviews" class="btn btn-primary text-white">See reviews</a>
          
          
          </footer>
          <ul class="list-group list-group-flush mt-2">
          <li class="list-group-item"> Created by: {{ result.author.firstname + " "+ result.author.lastname }}</li>
        </ul>
        </div>
      </article>
       </div>
  </section>
  </div>
  
</template>

<script>
    export default {
        props: {
            result: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                stars: []
            }
        },
        methods:{
            reviews(){
                if(this.result){
                    this.$store.commit('SET_CLASS', this.result);
                    this.$router.push('/reviews')
                }
            }
        }
    }
</script>

