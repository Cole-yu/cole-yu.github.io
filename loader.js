$(document).ready(function () {
    var time = "1000";          //设置延迟时间，以毫秒为单位
    loading(time);              //当dom树构建完成时，加载初始动画效果，同时渲染页面
    var arr = document.getElementsByClassName("hoverScale");
        arr[0].addEventListener("click", gitclick, true);
        arr[1].addEventListener("click", sinaclick, true);
    //console.log(arr);

        document.getElementById("refresh").addEventListener("click", function () {
            document.getElementById("refresh").classList.add("selected");
            var arr = document.getElementsByClassName("horizontal-line");           
            arr[0].style.display = "block";                 //显示进度条
            arr[0].classList.add("active");
            setTimeout(function () {
                window.location.reload();                           //刷新页面                
            }, 3000);            
            console.log("ok");
        }, true);

});


function loading(time) {
    setTimeout(lazy, time);             //延迟加载
}

function lazy() {                               //显示进入网页的加载动画
    $('body').addClass('loaded');
    $('#loader-wrapper .load_title').remove(); 
}

//外网链接事件,二级封装
function sinaclick() {
    var url_string = "http://weibo.com/coleyu19932";
    lineload(url_string);
}

//外网链接事件,二级封装
function gitclick() {
    var url_string = "https://github.com/Cole-yu";
    lineload(url_string);
}

//外网链接事件,一级封装
function lineload(url) {
    var arr = document.getElementsByClassName("horizontal-line");
    console.log(arr);
    arr[0].style.display = "block";                 //显示进度条
    arr[0].classList.add("active");                 //添加加载动画
    setTimeout(function () {
        window.open(url);
        arr[0].classList.remove("active");       //恢复为未激活状态，为下次做准备   
        arr[0].style.display = "none";              //隐藏进度条
    }, 3000);
    

}