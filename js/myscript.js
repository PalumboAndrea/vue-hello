const { createApp } = Vue

createApp({
    data()  {
        return {
            message:'Hello Vue!',
            url: 'https://i.pinimg.com/originals/da/7b/61/da7b615cd6bf4db75fe36ab49d11c69e.jpg',
            size: ['sprinter-size', 'px-4', 'mt-2'],
        }
    }
}).mount('#app')