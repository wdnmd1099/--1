// 这个xxx.js 是订阅发布的逻辑，导出此逻辑给其它模块引用
export const eventHub = {
    // map 是消息队列，存储所有的订阅者，发布时，先订阅的先执行
    map: {
        // click: [f1 , f2 , ...]
        // click1:[f1 , f2 , ...]
    },
    on: (name, fn) => { // name 是监听的事件名， fn 是监听的事件被发布后触发的函数，on是指订阅
        //如果没有此事件就新建一个空数组以存储新事件
        eventHub.map[name] = eventHub.map[name] || []
        eventHub.map[name].push(fn)
    },
    emit: (name, data) => { // name 是需要发布的事件名，
        //data 会传给所有订阅了此事件的订阅者，订阅了此事件的订阅者会接收data并传给 on 的 fn 函数
        const q = eventHub.map[name]
        if (!q) {console.error('不存在此事件'); return}
        q.map(f => f.call(null, data))
        return undefined
    },
    off: (name, fn) => { // 取消订阅
        const q = eventHub.map[name]
        if (!q) { return }
        const index = q.indexOf(fn)
        if (index < 0) {  console.error('取消订阅失败'); return }
        q.splice(index, 1)
        console.log('取消订阅成功')
    }
}