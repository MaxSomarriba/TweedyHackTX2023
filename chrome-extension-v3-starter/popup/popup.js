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
