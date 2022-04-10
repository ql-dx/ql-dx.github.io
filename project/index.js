
// 设置 logo 点击跳出弹窗事件
document.getElementById('logo').addEventListener('click',()=>{
    let val = (document.getElementById('nav').style.display === 'none' ? 'block' : 'none');
    document.getElementById('nav').style.display = val;
})
