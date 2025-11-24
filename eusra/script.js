const apiURL = "https://raw.githubusercontent.com/USERNAME/REPO/main/messages.json"; 
// replace this with your actual link

let messages = [];

async function loadMessages() {
    const response = await fetch(apiURL);
    const data = await response.json();
    messages = data.messages;
    newMessage();
}

function newMessage() {
    if (messages.length > 0) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        document.getElementById("messageBox").innerText = messages[randomIndex];
    }
}

loadMessages();
