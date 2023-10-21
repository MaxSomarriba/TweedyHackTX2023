let scrapeButton = document.getElementById('getTextButton');
let textArea = document.getElementById('result');
let x = document;

scrapeButton.addEventListener('click', async ()=> {
    // Get current tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: scrapeFromPage,
    });
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text) {
        textArea.textContent = request.text;
    }
})

function scrapeFromPage() {
    let text = document.body.innerText;
    // alert(text);
    // textArea.textContent = "Hello";
    let new_m = "new message";
    chrome.runtime.sendMessage({text});
    // console.log(text);
    // div.innerHTML = text;

}

function onWindowLoad() {
    var message = document.getElementById('result');

    chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
        var activeTab = tabs[0];
        var activeTabId = activeTab.id;

        return chrome.scripting.executeScript({
            target: { tabId: activeTabId },
            injectImmediately: true,  // uncomment this to make it execute straight away, other wise it will wait for document_idle
            func: DOMtoString,
            args: ['body']  // you can use this to target what element to get the html for
        });

    }).then(function (results) {
        message.innerText = results[0].result;
    }).catch(function (error) {
        message.innerText = 'There was an error injecting script : \n' + error.message;
    });
}

window.onload = onWindowLoad;

function DOMtoString(selector) {
    if (selector) {
        selector = document.querySelector(selector);
        if (!selector) return "ERROR: querySelector failed to find node"
    } else {
        selector = document.documentElement;
    }
    return selector.outerHTML;
}

// DOM, the code that representation of the HTML and CSS
// getElementbyID, we know the id we are looking for which is tweet text
// make a list of different

var words = text.split(" · ");
  for (var i = 0; i < words.length; i++) {
    var count = words[i].length - 2;
    var last = words[i].charAt(words[i].length - 1);
    return words[i][0] + count + last;
  }