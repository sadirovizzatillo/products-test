<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    style="width:600px; margin: 0 auto;"
    >
    <v-text-field
    v-model="name"
    :counter="10"
    :rules="nameRules"
    label="Name"
    required
    ></v-text-field>
    
    <v-text-field
    v-model="password"
    :rules="passwordRules"
    label="E-mail"
    required
    ></v-text-field>    
    
    <v-btn
    color="primary"
    @click="login"
    >
    Login
</v-btn>
</v-form> 
</template>

<script>
import router from '@/router'
export default {
    name:"LoginView",
    data(){
        return{
            valid: true,
            name:"",
            password:"",
            passwordRules: [
            (value) => !!value || 'Please type password.',
            (value) => (value && value.length >= 6) || 'minimum 6 characters',
            ],
            nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
        }
    },
    methods:{
        validate () {
            this.$refs.form.validate()
        },
        login(){
            if([this.name, this.password].includes("")){
                return this.$refs.form.validate()
            }
            const form = {
                username:this.name,
                useremail:this.email
            }
            localStorage.setItem("user", JSON.stringify(form))
            router.push("/products")
        }
    }
}
</script>

<style>

</style>