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
            modifyPage(responseData.result);
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

// Define a callback function to handle new tweet elements
function handleNewTweetElements(mutationsList, observer) {
    alert("working");
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

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(handleNewTweetElements);
alert(observer);

// Specify the target node to observe (the entire document)
const targetNode = document;
alert(document);

// Configuration of the observer
const config = { childList: true, subtree: true };

// Start observing changes in the DOM
observer.observe(targetNode, config);