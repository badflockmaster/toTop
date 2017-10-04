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
            var otop = document.documentElement.scrollTop||document.body.scrollTop;
            var speed = Math.ceil(otop/6);
            document.documentElement.scrollTop = document.body.scrollTop -= speed;
            flag = true;
            if(otop == 0)
            {
                clearInterval(timer);
            }
        }, 30);
        //获取滚动条距离顶部的距离
    };
};
