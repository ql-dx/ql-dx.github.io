
// 点击获取数据
document.getElementById('btn').addEventListener('click',()=>{
    let box = document.getElementById('box');
    let xhr = new XMLHttpRequest();
    xhr.open('post','https://api.apiopen.top/singlePoetry');
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status <300){
                let {result} = JSON.parse(xhr.response);
                console.log(result);
                box.innerHTML = result;
            }else{
                // console.log(xhr.status);
                box.innerHTML = xhr.status;
            }
        }
    }
})