import {eventHub} from './xxx' 

// test.js 订阅了一个名为click的事件
eventHub.on('click', (data)=>{console.log("test.js函数被触发" + data)})

setTimeout(() => {  
    // 在三秒后发布此事件，所有订阅了click事件的订阅者将会执行订阅时所传的函数
    eventHub.emit('click', 'kasan')
}, 3000);

console.log(eventHub)