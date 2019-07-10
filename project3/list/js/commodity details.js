// class List{
//     constructor(){
//         this.main2 = document.getElementById("main2");
//         console.log(this.main2);
//         this.url = "http://localhost:8181/project/data/goods.json";
        
//         this.init();
//         this.addEvent();  // 1.绑定事件
//     }
//     addEvent(){
//         var that = this;
//         this.main2.onclick = function(eve){
//             console.log(1);
//             var e = eve || window.event;
//             var t = e.target || e.srcElement;
//             if(t.className == "addCar"){
//                 that.id = t.parentNode.getAttribute("index");  // 2.获取当前的商品ID
//                 console.log(that.id);
//                 that.setData();    // 3.存localstorage
//             }
//         }
//     }
//     setData(){
//         console.log(this.id);
//         this.goods = localStorage.getItem("goods");

//         if(this.goods){
//             this.goods = JSON.parse(this.goods)

//             var onoff = true;
//             for(var i=0;i<this.goods.length;i++){
//                 if(this.goods[i].id == this.id){
//                     this.goods[i].num++;
//                     onoff = false;
//                 }
//             }
//             if(onoff){
//                 this.goods.push({
//                     id:this.id,
//                     num:1
//                 })
//             }
//         }else{
//             this.goods = [{
//                 id:this.id,
//                 num:1
//             }];
//         }
//         localStorage.setItem("goods",JSON.stringify(this.goods));   // 最后将数据设置回去
//     }
//     init(){
//         var that = this;
//         ajaxGet(this.url,function(res){
//             that.res = JSON.parse(res);
//             that.display()
//         })
//     }
//     display(){
//         var str = "";
//         for(var i=0;i<this.res.length;i++){
//             str += `<li class="box" index="${this.res[i].goodsId}">
//             <a href="http://localhost:8181/project/list/xiangqing.html?ID=${this.res[i].goodsId}"><img src="${this.res[i].src}" alt=""></a>
//                         <span>${this.res[i].price}</span>
//                         <em>已售1018件</em>
//                         <p>${this.res[i].name}</p>
//                         <b><img src="img/查看详情.png" alt="">详情</b>
//                         <b><img src="img/收藏.png" alt="">收藏</b>
//                         <b class="addCar"><img src="img/购物车 (1).png">加入购物车</b>                 
//                     </li>`;
//         }
//         this.main2.innerHTML = str;
//     }   
// }
// new List();