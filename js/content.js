/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	/* If the received message has the expected format... */
	if (msg.text && (msg.text == "report_back")) {
        /* Call the specified callback, passing 
        the web-pages DOM content as argument */
        sendResponse(document.getElementById("mybutton"));
        
    }

    if (msg.text && (msg.mess == "ok")) {
        /* Call the specified callback, passing 
        the web-pages DOM content as argument */
        alert();
    }

    sendResponse(alert("msg.args"));
});

function test(){

chrome.tabs.executeScript(0, {file: ["js/script.js","js/jquery-2.2.2.min.js"] }, function(result){
var userName = document.getElementById("txtUsername");
        userName.value = "pokemonni01";
        var inputs = document.getElementsByTagName('input');

        for(var i = 0; i < inputs.length; i++) {
        	if(inputs[i].type.toLowerCase() == 'password') {
        		inputs[i].value = "beb8ba"
        	}
        }
});

}




function loginTrueWifi(){
	var username = "0997724131";
	var password = "001934";
	var userNameTxtbox = document.getElementById("username");
    userNameTxtbox.value = username;
    var inputs = document.getElementsByTagName('input');

    for(var i = 0; i < inputs.length; i++) {
       	if(inputs[i].type.toLowerCase() == 'password') {
        	inputs[i].value = password;
        }
    }
    var button = document.getElementById("confirm");
    button.click();
}//end loginTrueWifi

