
    function Car(){
        this.tbody = document.querySelector("tbody");
        this.odiv = document.querySelector(".wu");
        this.url = "http://localhost:8181/project/data/goods.json";
        
        this.init();
        this.addEvent();//绑定删除事件
    }
    Car.prototype.addEvent = function(){
        var that = this;
        this.tbody.onclick = function(){
            //console.log(1);
            if(event.target.className == "del"){
                that.id=event.target.parentNode.getAttribute("index");
                //console.log(id);

                event.target.parentNode.remove();//删除DOM元素

                that.setData(function(i){
                    that.goods.splice(i,1);
                });  // 删除localstorage的数据
            }
        }
        this.tbody.oninput = function(){
            if(event.target.className == "changeNum"){
                that.id = event.target.parentNode.parentNode.getAttribute("index");
                // 修改localstorage的数据
                that.setData(function(i){
                    that.goods[i].num = event.target.value;
                });
            }
        }
    }
    Car.prototype.setData=function(callback){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                // 执行回调函数
                callback(i);
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    Car.prototype.init=function(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.getData();
        })
    }
    Car.prototype.getData=function(){
        	this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
        	this.display();
        }
        Car.prototype.display=function(){
        	var str = "";
        	for(var i=0;i<this.res.length;i++){
        		for(var j=0;j<this.goods.length;j++){
        			if(this.res[i].goodsId == this.goods[j].id){
        				str += `<tr index="${this.res[i].goodsId}">
                                    <td><img src="${this.res[i].src}" alt=""></td>
                                    <td>${this.res[i].name}</td>
                                    <td>${this.res[i].price}</td>
                                    <td><input type="number" value="${this.goods[j].num}" min=1 class="changeNum"></td>
                                    <td class="del">X</td>
                                </tr>`;
                                this.odiv.style.display = "none";
        			}
        		}
        	}
        	this.tbody.innerHTML = str;
        }

    new Car();     
