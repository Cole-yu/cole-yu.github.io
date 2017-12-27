$(document).ready(function () {
    var time = "1000";          //设置延迟时间，以毫秒为单位
    loading(time);              //当dom树构建完成时，加载初始动画效果，同时渲染页面
    var arr = document.getElementsByClassName("hoverScale");
        arr[0].addEventListener("click", gitclick, true);
        arr[1].addEventListener("click", sinaclick, true);
    //console.log(arr);

    //给设置图标一个active的类，使其一直保持转动
        var setIcon = document.getElementsByClassName("set-icon")[0];
        setIcon.classList.add("active");
        console.log(setIcon.classList);
        
        setIcon.addEventListener("mouseover", setOnmouseOver, true);
        setIcon.addEventListener("mouseout", setOnmouseOut, true);

        //document.getElementById("refresh-btn").classList.add("active");

        document.getElementById("refresh").addEventListener("click", function () {
            document.getElementById("refresh").classList.add("selected");
            var arr = document.getElementsByClassName("horizontal-line");           
            arr[0].style.display = "block";                 //显示进度条
            arr[0].classList.add("active");
            setTimeout(function () {
                window.location.reload();
                //Javascript刷新页面的几种方法：
                //1    history.go(0) 
                //2    location.reload() 
                //3    location=location 
                //4    location.assign(location) 
                //5    document.execCommand('Refresh') 
                //6    window.navigate(location) 
                //7    location.replace(location) 
                //8    document.URL=location.href

            }, 3000);            
            console.log("ok");
        }, true);

});

function setOnmouseOver() {
    var el = document.getElementsByClassName("set-icon");
    el[0].classList.remove("active");
}
function setOnmouseOut() {
    var el = document.getElementsByClassName("set-icon");
    el[0].classList.add("active");
}

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