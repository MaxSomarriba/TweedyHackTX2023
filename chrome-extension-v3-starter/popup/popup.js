let scrapeButton = document.getElementById('getTextButton');
let textArea = document.getElementById('result');
let x = document;
let maxButton = document.getElementById('maxButton');

scrapeButton.addEventListener('click', async ()=> {
    // Get current tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: scrapeFromPage,
    });
})

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    var array = request.textArray;
    try {
        const url = 'http://127.0.0.1:5000/run_python_script';  // Replace with your server's URL
        const data = { data: array };
        // alert(array);
        

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            // alert(responseData.result);
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: modifyPage,
                args: [responseData.result],
            });
        } else {
            resultDiv.textContent = 'Error executing Python script';
        }
    } catch (error) {
        console.error('Error:', error);
        resultDiv.textContent = 'Error executing Python script';
    }

    // create boolean array
    // perform extract text with span again with new boolean array
    // match up indices 
    // instead of doing stuff to an array just change style
    // alert("test");
    // textArea.textContent = request.textArray;
})

function modifyPage(scores_array) {
    const tweetTextElements = document.querySelectorAll('[data-testid="tweetText"]');
    var index = 0;

    // Loop through the matching elements
    tweetTextElements.forEach(function (tweetTextElement) {
        if (scores_array[index] > 0.1) {
            // tweetTextElement.style.color = "transparent";
            // // tweetTextElement.style.textShadow = "0 0 10px rgba(0, 0, 0, .5)";
            // tweetTextElement.style.backgroundClip = "text";
            // tweetTextElement.style.webkitBackgroundClip = "text";
            tweetTextElement.style.filter = "blur(5px)";
            
        }
    });
}

function scrapeFromPage() {
    // Get all elements with the attribute 'data-testid="tweetText"'
    // var tweetTextElements = document.querySelectorAll('[data-testid="tweetText"]');

    // Function to extract text from elements and differentiate by <span> elements
    // function extractTextWithSpan(element, textArray) {
        // Get all elements with the attribute 'data-testid="tweetText"'
        const tweetTextElements = document.querySelectorAll('[data-testid="tweetText"]');

        // Initialize an array to store the inner text
        const textArray = [];

        // Loop through the matching elements
        tweetTextElements.forEach(function (tweetTextElement) {
            // Get the inner text content of each element
            const innerText = tweetTextElement.textContent.trim();

            // Add it to the array
            textArray.push(innerText);
        });
        chrome.runtime.sendMessage({ textArray });
    }

// function onWindowLoad() {
//     var message = document.getElementById('result');

//     chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
//         var activeTab = tabs[0];
//         var activeTabId = activeTab.id;

//         return chrome.scripting.executeScript({
//             target: { tabId: activeTabId },
//             injectImmediately: true,  // uncomment this to make it execute straight away, other wise it will wait for document_idle
//             func: DOMtoString,
//             args: ['body']  // you can use this to target what element to get the html for
//         });

//     }).then(function (results) {
//         message.innerText = results[0].result;
//     }).catch(function (error) {
//         message.innerText = 'There was an error injecting script : \n' + error.message;
//     });
// }

// window.onload = onWindowLoad;

// function DOMtoString(selector) {
//     if (selector) {
//         selector = document.querySelector(selector);
//         if (!selector) return "ERROR: querySelector failed to find node"
//     } else {
//         selector = document.documentElement;
//     }
//     return selector.outerHTML;
// }

// DOM, the code that representation of the HTML and CSS
// getElementbyID, we know the id we are looking for which is tweet text
// make a list of different

// var words = text.split(" · ");
//   for (var i = 0; i < words.length; i++) {
//     var count = words[i].length - 2;
//     var last = words[i].charAt(words[i].length - 1);
//     return words[i][0] + count + last;
//   }
// const { exec } = require('child_process');

// // Function to run the Python script
// function runPythonScript() {

//     const pythonScriptPath = '../pyScript.py';
//     console.log("Running Python Script...");
//     // Replace this command with the appropriate Python executable and script path
//     const command = `python ${pythonScriptPath}`;

//     exec(command, (error, stdout, stderr) => {
//         if (error) {
//         console.error(`Error: ${error.message}`);
//         return;
//     }

//     console.log(`Python Script Output: ${stdout}`);
//     console.error(`Python Script Error: ${stderr}`);
//   });

// Call the function to run the Python script

