// // Use a scroll event listener to handle infinite scrolling and observe new elements as they load
// window.addEventListener('scroll', () => {
//     console.log("scrolling");
//     // Fetch the local HTML file
//     fetch('popup/popup.html')
//         .then(response => response.text())
//         .then(data => {
//             // Parse the content of local_file.html
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(data, 'text/html');

//             // Now you can access and manipulate the DOM of local_file.html
//             const buttonInLocalFile = doc.getElementById('getTextButton');
//             if (buttonInLocalFile) {
//                 // Example: Click the button in local_file.html
//                 buttonInLocalFile.click();
//             }
//         })
//         .catch(error => {
//             console.error('Error loading local_file.html:', error);
//         });
// });

// // Use a scroll event listener to handle infinite scrolling and observe new elements as they load
// window.addEventListener('scroll', () => {
//     scrapeFromPage();
// });


// async function logText (textArray) {
//     // var array = request.textArray;
//     console.log(textArray);
//     try {
//         const url = 'http://127.0.0.1:5000/run_python_script';  // Replace with your server's URL
//         const data = { data: textArray };
//         // alert(array);
        

//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });

//         if (response.ok) {
//             const responseData = await response.json();
//             // alert(responseData.result);
//             let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//             chrome.scripting.executeScript({
//                 target: { tabId: tab.id },
//                 func: modifyPage,
//                 args: [responseData.result],
//             });
//         } else {
//             resultDiv.textContent = 'Error executing Python script';
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         resultDiv.textContent = 'Error executing Python script';
//     }

//     // create boolean array
//     // perform extract text with span again with new boolean array
//     // match up indices 
//     // instead of doing stuff to an array just change style
//     // alert("test");
//     // textArea.textContent = request.textArray;
// }

// function modifyPage(scores_array) {
//     const tweetTextElements = document.querySelectorAll('[data-testid="tweetText"]');
//     var index = 0;

//     // Loop through the matching elements
//     tweetTextElements.forEach(function (tweetTextElement) {
//         if (scores_array[index] > 0.1) {
//             // tweetTextElement.style.color = "transparent";
//             // // tweetTextElement.style.textShadow = "0 0 10px rgba(0, 0, 0, .5)";
//             // tweetTextElement.style.backgroundClip = "text";
//             // tweetTextElement.style.webkitBackgroundClip = "text";
//             tweetTextElement.style.filter = "blur(5px)";
            
//         }
//     });
// }

// function scrapeFromPage() {
//     // Get all elements with the attribute 'data-testid="tweetText"'
//     // var tweetTextElements = document.querySelectorAll('[data-testid="tweetText"]');

//     // Function to extract text from elements and differentiate by <span> elements
//     // function extractTextWithSpan(element, textArray) {
//         // Get all elements with the attribute 'data-testid="tweetText"'
//         const tweetTextElements = document.querySelectorAll('[data-testid="tweetText"]');

//         // Initialize an array to store the inner text
//         const textArray = [];

//         // Loop through the matching elements
//         tweetTextElements.forEach(function (tweetTextElement) {
//             // Get the inner text content of each element
//             const innerText = tweetTextElement.textContent.trim();

//             // Add it to the array
//             textArray.push(innerText);
//         });
//         logText(textArray);
//     }