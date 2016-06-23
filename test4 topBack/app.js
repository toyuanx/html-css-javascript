/**
 * Created by dell on 2016/6/23.
 */

//加载网页
window.onload = function(){
    var topBtn = document.getElementById("btn");//找到元素对象
    var timer = null;
    var pageLookHeight = document.documentElement.clientHeight;//获取屏幕高度

    //获取滚动事件
    window.onscroll = function(){
        var backTop = document.body.scrollTop;
        if(backTop >= pageLookHeight ){
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }
    }
    topBtn.onclick = function(){
        timer = setInterval(function(){
            var backTop = document.body.scrollTop;//滚到顶端事件
            var speedTop = backTop / 5;
            document.body.scrollTop =backTop -speedTop;
            if(backTop == 0){
                clearInterval(timer);
            }
        },30);
    }
}