function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
var id = getUrlParam('ID');
var url = "http://localhost:8181/project/data/goods.json";


ajaxGet(url,function(res){
    res = JSON.parse(res);
    console.log(res);
    display(res);
})

function display(res){
    var str = "";
    console.log(1);
        for(var i=0;i<res.length;i++){
            if(id == res[i].goodsId){
                str += `<div class="left" index="${res[i].goodsId}">
                        <img src="${res[i].src}" alt="" class="i">
                        <span></span>
                        <p></p>
                        <a href="#"><img src="img/收藏 (1).png" alt="">收藏宝贝</a>
                        <a href="#"><img src="img/分享.png" alt="">分享</a>
                    </div>
                    <div class="middle">
                        <h3>幸福洒满夜晚</h3>
                        <p>${res[i].name}</p>
                        <div class="kuang">
                            <span>商城价</span>
                            <i>${res[i].price}</i>
                            <span>累计销量：1238 件</span>
                            <span>|</span>
                            <span>累计评价：10 条</span></br>
                            <span>市场价<s>￥416</s></span></br>
                            <span>领 券</span>
                            <s>暂无可使用的优惠券哦</s>
                  </div>`;
            }
        }
        $("#kongke").append(str)
}   




