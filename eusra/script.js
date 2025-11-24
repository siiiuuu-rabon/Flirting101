const apiURL = "https://raw.githubusercontent.com/siiiuuu-rabon/Flirting101/main/messages.json";

let messages = [];

async function loadMessages() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        messages = data.messages;
        newMessage();
    } catch (error) {
        document.getElementById("messageBox").innerText = "Error loading messages 😔";
    }
}

function newMessage() {
    if (messages.length > 0) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        document.getElementById("messageBox").innerText = messages[randomIndex];
    }
}

loadMessages();
