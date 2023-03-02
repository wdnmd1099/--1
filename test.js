import {eventHub} from './xxx' 

const fn1 = (data)=>{
    console.log("test.js函数被触发" + data)
}

// test.js 订阅了一个名为click的事件
eventHub.on('click', fn1)
eventHub.off('click', fn1)
setTimeout(() => {  
    // 在一秒后发布此事件，所有订阅了click事件的订阅者
    //将会接收到来自emit传的data（'kasan'）作为形参并传给订阅时所传的函数（fn1）
    eventHub.emit('click', 'kasan')
}, 1000);

console.log(eventHub)