console.log('Loaded!');

// chaning the content with javascript
//div element with id="first"

var so = document.getElementById('first');
so.innerHTML = "Just made some changes" ;

//making the img move on click

var moveright = 0;
function moveRight () {
    moveright = moveright + 5;
    pic.style.marginLeft = moveright +'px' ;
}
var pic = document.getElementById('madi');
pic.onclick = function (){
    var interval = setInterval(moveRight,50);
};