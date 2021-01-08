let app = new Vue({
    el: "#app",
    data: {
        mailList: []
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                const randMail = response.data.response;
                console.log(randMail);
                this.mailList.push(randMail);
            });
            
        }
        console.log(this.mailList);
    }
});