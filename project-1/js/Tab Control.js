//选项卡
    var ali = document.querySelectorAll("#ul li");
    var adiv = document.querySelectorAll(".splb div ul li");
    //console.log(adiv);

    for(var i=0;i<ali.length;i++){
        ali[i].setAttribute("zhang",i);

        ali[i].onclick=function(){
            console.log(1);
            for(var j=0;j<ali.length;j++){
                //console.log(ali.length);
                ali[j].className = "";
                adiv[j].style.display = "none";
            }
            this.className = "active";
            var index = this.getAttribute("zhang");
            adiv[index].style.display = "block";
        }
    };