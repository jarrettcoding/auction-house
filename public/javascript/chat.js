const chatForm = document.getElementById('chat-form'); 

const socket = io(); 

// message from server
socket.on('message', message => {
    console.log(message);
    outputMessage(message); 
});

// message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    // get message text
    const msg = e.target.elements.msg.value; 

    // 
    socket.emit('chatMessage', msg); 
}); 

// output message to DOM
function outputMessage(message) { 
    const div = document.createElement('div')
}; 