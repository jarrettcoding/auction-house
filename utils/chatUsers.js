const users = []; 

// join user to chat
function userJoin(id, username, room) {
    const chatUser = { id, username, room}; 

    users.push(chatUser); 

    return chatUser; 
}; 


// get current user
function getCurrentUser(id) {
    return users.find(chatUser => chatUser.id === id); 
}; 

module.exports = { userJoin, getCurrentUser}; 