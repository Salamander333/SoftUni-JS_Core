function solve() {
   let sendButton = document.getElementById('send');
   sendButton.addEventListener('click', onclick);

   let chatMessages = document.getElementById('chat_messages');

   function onclick() {
      let textContent = document.getElementById('chat_input');
      let message = document.createElement('div')
      message.setAttribute('class', 'message my-message');
      message.textContent = textContent.value;
      chatMessages.appendChild(message);
      textContent.value = textContent.defaultValue;
   }
}
