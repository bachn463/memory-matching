var images = [
	"images/baboon.jpg",
	"images/monky.jpg",
	"images/chimp.jpg",
	"images/gorilla.jpg",
	"images/monkyselfie.jpg",
	"images/shortdrill.jpg",
	"images/orangutan.jpg",
	"images/proboscis.jpg",
	"images/wisemonky.jpg",
	"images/baboon.jpg",
	"images/monky.jpg",
	"images/chimp.jpg",
	"images/gorilla.jpg",
	"images/monkyselfie.jpg",
	"images/shortdrill.jpg",
	"images/orangutan.jpg",
	"images/proboscis.jpg",
	"images/wisemonky.jpg"
]

$("img").on("dragstart", function(event){event.preventDefault();});
var img = $("img");

function set() {
	shuffle(images);
	for(var i = 0; i < images.length; i++){
		$(img[i]).attr("src", images[i]);
		$(img[i]).css("opacity", "0");
	}
}

function play() {
	var clickedOnce;
	//checking if its null makes it do weird things
	var clickedFirst = "empty";
	var clickedSecond = "empty";
	img.on("click", function(event) {
		if($(event.target).css("opacity")==="0") {
			clickedOnce = !clickedOnce;
		}	
		
		if($(event.target).css("opacity")==="0") {
			if(clickedOnce ) {
				clickedFirst = event.target;
			} else {
				clickedSecond = event.target;
			}
		}
		$(event.target).css("opacity", "1");
		
		if($(event.target).css("opacity")==="1") {
			if(clickedSecond !== "empty") {
				if($(clickedFirst).attr("src") !== $(clickedSecond).attr("src")) {
					setTimeout(function() {
						$(clickedFirst).css("opacity", "0");
						$(clickedSecond).css("opacity", "0"); 
						clickedFirst = "empty";
						clickedSecond = "empty";
					}, 10);
					
				} else {
					clickedFirst = "empty";
					clickedSecond = "empty";
				}
			}
			
			var finishedGame = true;;
			for(var i = 0; i < images.length; i++) {
				if($(img[i]).css("opacity")==="0") {
					finishedGame = false;
				}
			}
			
			if(finishedGame) {
				$(clickedSecond).css("opacity", "1");
				setTimeout(function() {
					alert("You won!! Lets start over"); 
					set();
					}, 10);
			}
		}
	});
}

//Fisher-Yates Shuffle
function shuffle(array) {
	var len = array.length;
	var a;
	var b;
	
	while (len) {
		b = Math.floor(Math.random() * len);
		len--;
		a = array[len];
		array[len] = array[b];
		array[b] = a;
	}
	return array;
}

set();
play();