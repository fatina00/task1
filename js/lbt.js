window.onload=function(){
	var container=document.getElementById('container');
	var list=document.getElementById('img_list');
	var buttons=document.getElementById('buttons').getElementsByTagName('span');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
	var index=1;
	
	/*写出关于小圆点的函数*/
	function showButton(){
		for(var i = 0;i < buttons.length; i++){
			if(buttons[i].className =='active'){
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'active';
	}
	/*next.onclick = function(){
		list.style.left=parseInt(list.style.left)- 500 + 'px';//parseint()函数是将字符串转换成数字
	*/
	/*
	prev.onclick = function(){
		list.style.left=parseInt(list.style.left)+ 500 + 'px';//parseint()函数是将字符串转换成数字
	}*/
	/*简单写法*/
	function anmitme(offset){
		var newLeft=parseInt(list.style.left)+ offset;
		var time=500;//位移总时间
		var interval=10;//位移间隔时间10ms
		var speed=offset/(time/interval);//每次位移量
		
		function go(){
			if(speed < 0 && parseInt(list.style.left) > newLeft||speed  > 0&&parseInt(list.style.left)<newLeft){
				list.style.left=parseInt(list.style.left) +speed+ 'px';
				setTimeout(go,interval);
			}
			else{
				if(newLeft > -500){
					list.style.left = -2500 + 'px';
				}
				if(newLeft < -2500){
					list.style.left= -500 + 'px';
				}
			}
		}
		go();
	}
	next.onclick = function(){
		if(index==5){
			index = 1;
		}
		else{
			index +=1;
		}
		showButton();
		anmitme(-500);
	}
	prev.onclick = function(){
		/*无线滚动的时候就是要判断是否到了最左边或者是最右边*/
		if(index == 1){
			index=5;
		}
		else{
			index -=1;
		}
		showButton();
		anmitme(500);
	}
	
	/*点击小圆点也会呈现相应的图片*/
	for( var i = 0;i <	buttons.length;	i++){
		buttons[i].onclick=function(){
			if(this.className == 'active'){
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			var offset= -500 * (myIndex - index);
			index = myIndex;/*如果现在是第几张，那么index为第五章*/
			anmitme(offset);
			showButton();
			/*debugger;表示在这个断点可以看是否跑了这段函数*/
		}
	}
}
