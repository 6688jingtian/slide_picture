function limitDrag(id)
{
	Drag.call(this,id);//继承属性
};
for(var i in Drag.prototype)
{
	limitDrag.prototype[i]=Drag.prototype[i];//继承方法
}
limitDrag.prototype.fnMove=function(ev)//函数重写
{
	var oEvent=ev||event;
	var l=oEvent.clientX-this.disX;//鼠横坐标
	var t=oEvent.clientY-this.disY;//鼠纵坐标
	if(l<0)
	{
		l=0;
	}
	if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth)
	{
		l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
	}
	this.oDiv.style.left=l+'px';
    this.oDiv.style.top=t+'px';
};