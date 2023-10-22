const hostName = "com.google.chrome.example.echo";
let port = chrome.runtime.connectNative(hostName);
port.onMessage.addListener(onNativeMessage);
port.onDisconnect.addListener(onDisconnected);

const message = {"text": "Hello World"};
if (port) {
    port.postMessage(message);
}

function onDisconnected() {
    port = null;
    console.error(`Failed to connect: "${chrome.runtime.lastError.message}"`);
  }
  