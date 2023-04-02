var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	let speed = document.querySelector("#player1").playbackRate;
	document.querySelector("#player1").playbackRate = (speed*.9);
	console.log(`Speed is ${(.9*speed)}`);
	});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	let speed = document.querySelector("#player1").playbackRate;
	document.querySelector("#player1").playbackRate = (speed + (speed*(1/9)));
	console.log(`Speed is ${(speed+(speed*(1/9)))}`);
	});
document.querySelector("#skip").addEventListener("click",function(){
	console.log("Skip ahead");
	let time = document.querySelector("#player1").currentTime;
	if (time <= ((document.querySelector("#player1").duration)-10)){
		document.querySelector("#player1").currentTime = time + 10;
	}else{
		document.querySelector("#player1").currentTime = 0;
	}
	final_time = document.querySelector("#player1").currentTime
	console.log(`Video current time is ${(final_time)}`)
});
document.querySelector("#mute").addEventListener("click",function(){
	if(document.querySelector("#player1").muted == false){
		console.log("Mute");
		document.querySelector("#player1").muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}else{
		console.log("Unmute");
		document.querySelector("#player1").muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});
document.querySelector("#slider").addEventListener("input",function(){
	document.querySelector("#player1").volume = (document.getElementById("slider").value/100)
	let volume = (document.querySelector("#player1").volume)*100;
	console.log(`The current value is ${(volume/100)}%`);
	document.getElementById("volume").innerHTML = volume;
})
document.querySelector("#vintage").addEventListener("click",function(){
	document.querySelector("#player1").classList.add("oldSchool");
})
document.querySelector("#orig").addEventListener("click",function(){
	document.querySelector("#player1").classList.remove("oldSchool");
})