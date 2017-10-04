window.onload=function(){
    //获取界面内容的div
    var main = document.getElementById("main");
    //获取回到顶部的div
    var top = document.getElementsByClassName("top")[0];

    var timer = null;
    var flag = true;
    window.onscroll = function()
    {
        if(!flag)
        {
            clearInterval(timer);
        }
        // 当用户在回到顶部的过程中，滚动了鼠标的滚轮。就讲flag设置为false；下次滚动条
        // 移动的时候，就会触发onscroll事件，来关闭定时器。
        flag = false;
    };
    //先初始化界面，让界面height变大
    for(var i = 0; i < 10000; i++)
    {
        var p = document.createElement("p"); // 创建一个元素节点 p
        var text = document.createTextNode(i); // 创建一个文本节点 text
        p.appendChild(text); // 将创建的文本节点text添加到p中；
        main.appendChild(p); // 将所有创建的节点添加到main中去；
    }

    //点击按钮回到顶部
    top.onclick=function()
    {
        timer = setInterval(function () {
            //获取滚动条距离顶部的距离
            var otop = document.documentElement.scrollTop||document.body.scrollTop;
            var speed = Math.ceil(otop/6);
            document.documentElement.scrollTop = document.body.scrollTop -= speed;
            //每滚动一次，设置一下flag。使得无法通过onscroll事件来关闭定时器。
            flag = true;
            if(otop == 0)
            {
                clearInterval(timer);
            }
        }, 30);
    };
};
