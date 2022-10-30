let _number;
function x1() {
    //拿到url #后的值
    const app = document.querySelector(`#app`);
    const number = window.location.hash.substring(1) || 1;
    //根据拿到不同的值去渲染相应的页面
    const div = document.querySelector(`#div${number}`);
    div.setAttribute("style", "display:block");
    app.appendChild(div);
    // div.style.display = "block" 也能这样写
    //如果切换的话，就把旧的剪切然后改成display none 然后插入到body里
    //知识点 appendChild 是剪切粘贴，把一个元素剪切然后粘贴到你想要的地方
    if (_number !== number && _number !== undefined) document.body.appendChild(document.querySelector(`#div${_number}`)).setAttribute("style", "display:none");
    _number = number;
}
x1();
window.addEventListener("hashchange", ()=>{
    x1(), console.log("hash变了");
});

//# sourceMappingURL=index.c4775257.js.map
