/* Regex-pattern to check URLs against. 
   It matches URLs like: http[s]://[...]stackoverflow.com[...] */
var urlRegex = /^file:\/\/\/:?/;


chrome.tabs.query({index: 0},function(tab){
	console.log(tab[0]);
	chrome.tabs.update(tab[0].id, {url: "https://portal.trueinternet.co.th/wifiauthen/web/wifi-login.php"});
	chrome.tabs.executeScript(0, {code: "chrome.extension.sendRequest({content: document.body.innerHTML}, function(response) { console.log('success'); });",file: ["js/script.js","js/jquery-2.2.2.min.js"] }, function(callBack){

	});

});

chrome.tabs.onUpdated.addListener(function(id,changeInfo,tab){
    if(changeInfo.status=='complete'){ //To send message after the webpage has loaded
        
      }
});

function login(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		alert(tabs[0].id);
	});

}

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "startFunc") sendMessage();
    }
);

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (tab)
    chrome.tabs.sendMessage(tab.id, {args: "555"}, function(response) {
      console.log(tab.id);
    });
});

function sendMessage(){
	chrome.tabs.getSelected(integer 0, function(tab){
		var tabId = tab.id;
	});
	chrome.tabs.sendMessage(tabId,{mess:"ok"}, function(response) {
      console.log(response);
    });

}//end sendMessage
