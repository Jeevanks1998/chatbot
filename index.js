// index.js
document.addEventListener('DOMContentLoaded', function () {
    const chatInput = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chatbot-messages');

    // Send message
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            appendMessage('You', message);
            chatInput.value = '';
            // Simulate AI response
            setTimeout(() => {
                appendMessage('AI Bot', `You said: "${message}". How can I assist you further?`);
            }, 1000);
        }
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (sender === 'AI Bot') messageElement.classList.add('bot');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});