const { createApp } = Vue

const options = {
    data() {
        return {
            message: 'Amazing Events1',
        }
    },
    created(){
        console.log('Amazing Events2')
    },
    beforeCreated(){
        console.log('Amazing Events3')
    //fetch
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));
    },
mounted() {
    console.log('Amazing Events4')
    }
}
const app = createApp(options )    

app.mount('#app')