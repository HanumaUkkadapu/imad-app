console.log('Loaded!');

// chaning the content with javascript
//div element with id="first"

var so = document.getElementById('first');
so.innerHTML = "Just made some changes" ;

//making the img move on click by adding an onclick event

var pic = document.getElementById('madi');
pic.onclick = function (){
    pic.style.marginLeft = '200px';
};