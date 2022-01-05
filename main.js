var big_card=document.getElementsByClassName('big-card');
big_card[0].style.display="block";
let wid=screen.width;
console.log(wid);


var i=0;
var j=0;
function big_card_image(){
	big_card[i].style.display="block";
	if (i>0){
		big_card[i-1].style.display="none";
	}
	else{
		big_card[big_card.length-1].style.display="none";
	}
	i+=1;
	if (i==big_card.length){
		i=0;
	}
}
setInterval(big_card_image, 1000);


var img=document.getElementsByClassName('features-cont-img');


function rotate(){
	img[0].style.transform="rotateY("+j+"deg)";
	img[1].style.transform="rotateY(50"+j+"deg)";
	img[2].style.transform="rotateY(100"+j+"deg)";
	j+=1
}
setInterval(rotate, 15);



var flag=0;
var menu_bar=document.querySelector(".menu-bar-down-cont");
var menu_buts=document.getElementsByClassName("menu-bar-but");
function menubar(){
	if (flag==0){
		flag=1;
		menu_bar.style.display="flex";
		menu_bar.style.animationName="menu-go-down";
		menu_bar.style.animationDuration="2.5s";
		Array.from(menu_buts).forEach(element=>{
			element.style.display="block";
			element.style.animationName="for_opacity";
			element.style.animationDuration="5s";
		})
	}
	else{
		flag=0;
		menu_bar.style.animationName="menu-go-up";
		menu_bar.style.animationDuration="0.8s";
		
		Array.from(menu_buts).forEach(element=>{
			element.style.display="block";
			element.style.animationName="for_back_opacity";
			element.style.animationDuration="0.5s";
		})
	}

}





