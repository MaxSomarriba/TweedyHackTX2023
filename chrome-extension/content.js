// Define a callback function to handle new tweet elements
function handleNewTweetElements(mutationsList, observer) {
    // alert("working");
    for (const mutation of mutationsList) {
        console.log(mutation);
        if (mutation.type === 'childList') {
            // Look for added nodes (new elements)
            const addedNodes = mutation.addedNodes;
            for (const node of addedNodes) {
                // if (node.nodeType === Node.ELEMENT_NODE) {
                    // Check for elements with the 'data-testid' attribute set to 'tweetText'
                    if (node.hasAttribute('data-testid') && node.getAttribute('data-testid') === 'tweetText') {
                        // This is a new tweet element
                        //   console.log('New tweet element detected:', node.textContent);
                        alert('working');
                        // You can perform actions on the new tweet element here
                    }
                // }
            }
        }
    }
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