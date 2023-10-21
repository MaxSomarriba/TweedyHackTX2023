let scrapeButton = document.getElementById('getTextButton');

scrapeButton.addEventListener('click', async ()=> {
    // Get current tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: scrapeFromPage,
    });
})

function scrapeFromPage() {
    let text = document.body.innerText;
    alert(text);
}