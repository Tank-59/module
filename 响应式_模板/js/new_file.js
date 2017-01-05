window.onload = function(){
	var body_div = document.getElementById('body_div');
	var body = document.body;
	function fun1()
		{
					wi = window.innerWidth/1024;
					he = window.innerHeight/768;
					if(wi<he){//足够高
						body.style.height = window.innerHeight/wi + "px";
						body_div.style.marginTop = "-384px";
						body_div.style.top = "50%";
						body_div.style.left = "0px";
						body_div.style.marginLeft = "0px";
						document.getElementsByTagName("html")[0].style.zoom=wi;
					}else if(wi == he){
						body.style.height = window.innerHeight/wi + "px";
						body_div.style.top = "0px";
						body_div.style.left = "0px";
						body_div.style.marginTop = "0px";
						body_div.style.marginLeft = "0px";
						document.getElementsByTagName("html")[0].style.zoom=wi;
					}else{//足够宽
						body.style.height = window.innerHeight/he + "px";
						body_div.style.marginLeft = "-512px";
						body_div.style.left = "50%";
						body_div.style.top = "0px";
						body_div.style.marginTop = "0px";
						document.getElementsByTagName("html")[0].style.zoom=he;
					}
		};
		fun1();
		window.onresize = function(){
			fun1();
		};
		
		
	};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	