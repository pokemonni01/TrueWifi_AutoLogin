/* Regex-pattern to check URLs against. 
   It matches URLs like: http[s]://[...]stackoverflow.com[...] */
var urlRegex = /^file:\/\/\/:?/;

/* A function creator for callbacks */
function doStuffWithDOM(element) {
    //alert("I received the following DOM content:\n" + element);
    var searchBox = document.getElementById("txtUsername");
  	searchBox.value = "test";
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    /*...check the URL of the active tab against our pattern and... */

        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);
   
});

chrome.tabs.query({index: 0},function(tab){
	console.log(tab[0]);
	chrome.tabs.update(tab[0].id, {url: "http://siamfishing.com/loginpage.php"});
	chrome.tabs.executeScript(0, {code: "chrome.extension.sendRequest({content: document.body.innerHTML}, function(response) { console.log('success'); });",file: ["js/script.js","js/jquery-2.2.2.min.js"] }, function(callBack){

	});

});

chrome.tabs.onUpdated.addListener(function(id,changeInfo,tab){
    if(changeInfo.status=='complete'){ //To send message after the webpage has loaded
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },function(response){
           //doStuffWithDOM(response);
           //login();

        });
      }
});

function login(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {load: "complete"}, function(response) {
  			var searchBox = document.getElementById("txtUsername");
  			searchBox.value = "test";
    		console.log("response.farewell");
  		});
	});
}