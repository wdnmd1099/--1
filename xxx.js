// 这个xxx.js 是订阅发布的逻辑，导出此逻辑给其它模块引用
export const eventHub = {
    map: {
        // click: [f1 , f2 , ...]
        // click1:[f1 , f2 , ...]
    },
    on: (name, fn) => {
        //如果没有此事件就新建一个空数组以存储新事件
        eventHub.map[name] = eventHub.map[name] || []
        eventHub.map[name].push(fn)
    },
    emit: (name, data) => {
        const q = eventHub.map[name]
        if (!q) return
        q.map(f => f.call(null, data))
        return undefined
    },
    off: (name, fn) => {
        const q = eventHub.map[name]
        if (!q) { return }
        const index = q.indexOf(fn)
        if (index < 0) { return }
        q.splice(index, 1)
    }
}