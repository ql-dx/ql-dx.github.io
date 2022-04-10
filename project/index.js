
// 设置 logo 点击跳出提示框事件
document.getElementById('logo').addEventListener('click',()=>{
    let val = (document.getElementById('nav').style.display === 'none' ? 'block' : 'none');
    document.getElementById('nav').style.display = val;
})

// 设置 search 点击跳出提示框事件
document.getElementById('head-search').addEventListener('click',()=>{
    document.getElementById('message').style.display = 'block';
})

// 设置 提示框 关闭和确认 点击退出提示框事件
document.getElementById('message-close').addEventListener('click',()=>{
    document.getElementById('message').style.display = 'none';
})
document.getElementById('message-submit').addEventListener('click',()=>{
    document.getElementById('message').style.display = 'none';
})

// 设置 nav列表 点击跳出提示框事件
document.getElementById('nav').addEventListener('click',(event)=>{
    // tagName -- 注意：标签需要写成 大写
    if(event.target.tagName  === 'SPAN'){
        document.getElementById('message').style.display = 'block';
    }
})

// 设置 head列表 点击跳出提示框事件
document.getElementById('head-nav').addEventListener('click',(event)=>{
    if(event.target.tagName  === 'LI'){
        document.getElementById('message').style.display = 'block';
    }
})