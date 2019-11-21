Vue.use(vuelidate.default)

new Vue({
    el: '#app',

    data() {
        return {
            form:{
                name: null,
                email: null,
                password: null,
            }
        }
    },

    validations: {
        form: {
            name: {
                required: validators.required
            },

            email: {
                required: validators.required
            }
        }

    },

    methods: {
        submitForm () {
            if (!this.formisValid) {
                console.log('Form Submitted', this.form)
            }
            else {
                console.log('invalid form')
            }
        }
    }
})