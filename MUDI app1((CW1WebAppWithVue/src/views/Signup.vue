<template>
  <div class="container" > 
    <div class="card mt-5" >
      <div class="card-header" >
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <span style="cursor: pointer" class="nav-link" :class="{active: isLogin}"
                  @click="isLogin = true">Login</span>
          </li>
          <li class="nav-item">
            <span style="cursor: pointer" class="nav-link" :class="{active: !isLogin}"
                  @click="isLogin = false"> Register</span>
          </li>
        </ul>
      </div>
      <div class="card-body w-50 mt-2" >
        <h5 class="card-title">{{ isLogin ? 'Welcome back' : 'Create your account' }}</h5>
        <small v-for="error in error_msg" class="text-danger" v-bind:key="error"> {{error}} </small>
        <div class="login" v-if="isLogin">
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control"
                   placeholder="Enter email" v-model="user.email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="user.password">
          </div>
          <button type="button" class="btn btn-primary" @click="login">Login</button>
        </div>
        
        <div class="login" v-else>
          <div class="row">
            <div class="form-group col-md-6">
              <label>First Name</label>
              <input type="email" class="form-control"
                     placeholder="Enter first name" v-model="user.firstname">
            </div>
            
            <div class="form-group col-md-6">
              <label>Last Name</label>
              <input type="email" class="form-control"
                     placeholder="Enter last name" v-model="user.lastname">
            </div>
          </div>
          
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control"
                   placeholder="Enter email" v-model="user.email" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="user.password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="checked">
            <label class="form-check-label" for="exampleCheck1">As a service provider?</label>
          </div>
          <button type="button" class="btn btn-primary" @click="register">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['id'],
        data() {
            return {
                isLogin: true,
                checked: false,
                error: false,
                error_msg: [],
                user: {
                    firstname: null,
                    lastname: null,
                    email: null,
                    password: null, type: 'user'
                }
            }
        },
        watch: {
            checked(val) {
                this.user.type = val ? 'sp' : 'user'
            }
        },

        methods: {
            register() {
                //return console.log(this.user);
                this.error = false;
                const users = JSON.parse(localStorage.getItem('users'));
                if (this.checkform()) {
                    let user = users.filter(user => user.email === this.user.email);
                    if (user.length >= 1) {
                        alert('user already exists')
                    } else {
                        console.log('cleared');
                        //register and login user with id
                        //checks whether user is service providerlet new_user = {id :users.length + 1,type: "sp",...this.user};
                        this.$store.commit('SET_USER', {...this.user});
                        //persist to local storage users.push({id :users.length + 1,...this.user});
                        localStorage.setItem('users', JSON.stringify(users));
                        return this.$router.push('/dashboard');
                    }
                }
            },
            checkform() {
                if (this.user.firstname && this.user.lastname && this.user.email && this.user.password) {
                    return true;
                }

                this.errors = [];

                if (!this.user.firstname) {
                    this.error_msg.push('firtstname required.');
                }
                if (!this.user.lastname) {
                    this.error_msg.push('firtstname required.');
                }
                if (!this.user.email) {
                    this.error_msg.push('Email required.');
                }
                if (!this.user.password) {
                    this.error_msg.push('Password required.');
                }
            },
            login() {
                this.errors = [];
                const users = JSON.parse(localStorage.getItem('users'));
                if (users) {
                    let user = users.filter(user => user.email === this.user.email && user.password === this.user.password);
                    if (user.length === 1) {
                        this.$store.commit('SET_USER', {...user});
                        return this.$router.push('/dashboard');
                    } else {
                        this.error_msg.push("Incorrect Credentials")
                    }
                }
            }
        }
    }
</script>
