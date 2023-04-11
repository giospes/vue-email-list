const app = Vue.createApp({
    data(){
        return{
            maxNumber: 10,
            emails: []

        }
    },
    methods:{
        generateEmails(){
            this.emails=[]
            for(let i =0; i<this.maxNumber; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (res)=>{
                    this.emails[i] = res.data.response
                })
                
            }   
        }   
    }
})

app.mount("#app")