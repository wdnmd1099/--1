import {eventHub} from './xxx' 


// main.js 订阅了同一个监听事件，但是触发的函数不同
eventHub.on('click', (data)=>{console.log('main.js的click事件被触发:' + data + '这句话代表不同的函数')})
eventHub.on('click', (data)=>{console.log('main.js的click事件被触发:' + data)})


// 如果订阅的事件不被发布，就不会被执行所传的函数
eventHub.on('upPage', (data)=>{console.log('main.js的upPage事件被触发:' + data)})