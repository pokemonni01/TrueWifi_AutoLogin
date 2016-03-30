var bgPage = chrome.extension.getBackgroundPage();
document.getElementById('mybutton').onclick = test();
function test(){
	chrome.extension.sendMessage({ msg: "startFunc" });
	console.log("test");
}

$( document ).ready(function() {
    $("#mybutton").click(function(){
    chrome.extension.sendMessage({ msg: "startFunc" });
});
});
