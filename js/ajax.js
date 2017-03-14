function ajax(url,funSucc,funFail)
{
	//1.创建ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
    else
    {
    	var oAjax=new ActiveXObject('Microsoft.XMLHTTP');//兼容IE6
    }
    
    //2.连接服务器
    //open（方法，服务器，异步传输）
    oAjax.open('GET','url',true);
    
    //3.发送请求
    oAjax.send();
    
    //4.接收返回
    oAjax.onreadystatechange=function()
    {
    	if(oAjax.readyState==4)//4.代表读取完成
    	{
    		if(oAjax.status==200)//http状态码
    		{
    			funSucc(oAjax.responseText);
    			//alert(oAjax.responseText);
    		}
    		else
    		{
    			funFail(oAjax.status);
    			alert("失败");
    		}
    	}
    }
}