// JavaScript Document
document.write(
	'<div id="live_img" style="position:relative; "><div id="floatChat" style="Z-INDEX: 5; RIGHT: 40px; WIDTH: 76px; POSITION: absolute; TOP: 210px; HEIGHT: 120px;"><a href="tongji.html" ><img src="/static/home/junxuan/images/logo01.png" border="0" style="margin-bottom:10px;width: 100px;" /></a><a href="" ><img src="/static/home/junxuan/images/logo02.png" border="0" style="margin-bottom:10px;width: 100px;" /></a><a href="" ><img src="/static/home/junxuan/images/logo03.png" border="0" style="margin-bottom:10px;width: 100px;" /></a><span onclick="show()" style="cursor: pointer">[X]</span></div></div>'
);
lastScrollYChat = 0;
function floatDiv() {
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
		diffY = document.documentElement.scrollTop;
	else if (document.body) diffY = document.body.scrollTop;
	else {
		/*Netscape stuff*/
	}

	percent = 0.1 * (diffY - lastScrollYChat);
	if (percent > 0) percent = Math.ceil(percent);
	else percent = Math.floor(percent);
	document.getElementById("floatChat").style.top =
		parseInt(document.getElementById("floatChat").style.top) + percent + "px";
	lastScrollYChat = lastScrollYChat + percent;
}
setTimeout(function () {
	window.setInterval("floatDiv()", 1);
}, 1500);
function show() {
	document.getElementById("live_img").style.display = "none";
	//alert("123");
}
