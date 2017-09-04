//active为激活
//1.先关闭所有active
//2.再所有active

var index = 0;

//*******************自动切换代码
setInterval(function(){
	var picture = document.getElementsByClassName("pic");
	if(index > 3)
		index = 0;
	index++;
	for (var i = picture.length - 1; i >= 0; i--) {
		picture[i].style.display = "none";
	}

	picture[index-1].style.display = "block";

},1500);
//*******************end


//*******************点击切换代码	
var slideIndex = 1;

function currentSlide(n){
	slideIndex = n;
	showSlide(slideIndex);
}

function plusSlide(num){
	slideIndex +=  num;
	showSlide(slideIndex);
}

function showSlide(currentIndex){

	var picture = document.getElementsByClassName("pic");

	if(currentIndex > 4)
		slideIndex = 1;
	else if(currentIndex < 1)
		slideIndex = 4;

	for (var i = picture.length - 1; i >= 0; i--) {
		picture[i].style.display = "none";
	}

	picture[slideIndex-1].style.display = "block";
}

//选择卡部分
function display(event){

	//先全部关闭
	var picGr = document.getElementsByClassName("picGroup");
	//console.log(picGr);
	for (var i = picGr.length - 1; i >= 0; i--) {
		picGr[i].style.display = "none";
	}

	//找到是哪个span对应的picGroup
	var switchH = document.getElementsByTagName("span");
	var index = 0;

	// console.log(switchH);
	// console.log(switchH[1]);
	// console.log(event.target);

	for (var j = switchH.length - 1; j >= 0; j--) {
		//console.log(index);
		if(event.target == switchH[j]){
			index = j;
//			console.log(index);
		}
	}

	// 显示对应的图片
	picGr[index - 7].style.display = "block";
}