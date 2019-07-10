
    
function Magnifier(){
    this.left1 = document.querySelector("#commodity .left");
    this.span = document.querySelector("#commodity .left span");
    this.left2 = document.querySelector("#commodity .left1");
    this.lImg = document.querySelector("#commodity .left1 img");

    this.addEvent()
}
Magnifier.prototype.init = function(){
//右边大图的宽高  除以  右边框的宽高  得到比例
    var w = this.lImg.offsetWidth / this.left2.offsetWidth;
    var h = this.lImg.offsetHeight / this.left2.offsetHeight;
//左边框的宽高  除以  比例  得到  span的宽高
    this.span.style.width = this.left1.offsetWidth / w + "px";
    this.span.style.height = this.left1.offsetHeight / h + "px";
}
Magnifier.prototype.addEvent = function(){
    var that = this;
//进入
    this.left1.addEventListener("mouseover",function(){
        console.log(1);
        that.over();
//补充布局:因元素被display:none了，js获取不到隐藏的元素的尺寸
        that.init();
    })
//离开
    this.left1.addEventListener("mouseout",function(){
        that.out();
    })
//移动
    this.left1.addEventListener("mousemove",function(eve){
        var e = eve || window.event;
        that.move(e);
    })
}
Magnifier.prototype.over = function(){
    
    this.span.style.display = "block";
    this.left2.style.display = "block";
}
Magnifier.prototype.out = function(){
    this.span.style.display = "none";
    this.left2.style.display = "none";
}
Magnifier.prototype.move = function(e){
//span跟随移动
//this.span.style.left = e.clientX - this.span.offsetWidth/2 - this.left1.offsetLeft + "px";
//this.span.style.top = e.clientY - this.span.offsetHeight/2 - this.left1.offsetTop + "px";

//利用布局解决
    var l = e.offsetX - this.span.offsetWidth/2;
    var t = e.offsetY - this.span.offsetHeight/2;
//边界限定
    if(l < 0) l=0;
    if(t < 0) t=0;
    
//计算比例
    var x = l / (this.left1.offsetWidth - this.span.offsetWidth);
    var y = t / (this.left1.offsetHeight - this.span.offsetHeight);
    
//让span跟随鼠标
    this.span.style.left = l + "px";
    this.span.style.top = t + "px";
    
//根据比例移动大图
    this.lImg.style.left = -x * (this.lImg.offsetWidth - this.left2.offsetWidth) + "px";
    this.lImg.style.top = -y * (this.lImg.offsetHeight - this.left2.offsetHeight) + "px";
}


onload = function(){
    new Magnifier();
}
