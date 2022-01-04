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


