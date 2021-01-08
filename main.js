console.log('ciao');

let app = new Vue({
    el: "#app",
    data: {
    },
    mounted(){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => {
            const randMail = response.data.response
            console.log(randMail);            
        });
            
    }
});