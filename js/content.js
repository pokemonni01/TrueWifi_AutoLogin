/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	/* If the received message has the expected format... */
	if (msg.text && (msg.text == "report_back")) {
        /* Call the specified callback, passing 
        the web-pages DOM content as argument */
        sendResponse(document.getElementById("mybutton"));
        var userName = document.getElementById("txtUsername");
        userName.value = "pokemonni01";
        var inputs = document.getElementsByTagName('input');

        for(var i = 0; i < inputs.length; i++) {
        	if(inputs[i].type.toLowerCase() == 'password') {
        		inputs[i].value = "beb8ba"
        	}
        }
    }

    if (msg.text && (msg.load == "complete")) {
        /* Call the specified callback, passing 
        the web-pages DOM content as argument */
        test();
    }
});

function test(){

chrome.tabs.executeScript(0, {file: ["js/script.js","js/jquery-2.2.2.min.js"] }, function(callBack){
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
