var config = {
    apiKey: "AIzaSyCfy_C1kQrVJcoZgqd2_5UwteN-BuIeGc8",
    authDomain: "chat-app-34ab7.firebaseapp.com",
    databaseURL: "https://chat-app-34ab7.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  
  var chatData = firebase.data().ref();
  
  function pushMessage(event) {
       if (event.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        chatData.push({name: name, text: text});
        $('#messageInput').val('');
    }
  }
  
  chatData.on("child_added", showMessage);

function showMessage(msg) {
    var message = msg.val();
    var messageSender = message.name;
    var messageContet = message.text;
    
    var messageEl = $("<div/>").addClass("message");
    var senderEl = $("<span/>").text(messageSender + ": ");
    var contentEl = $("<span/>").text(messageContent);
    
    messageEl.append(senderEl);
    messageEl.append(senderEl);
    $('#messages').append(messageEl);


}
  
  $('#messageInput').keypress(pushMessage);
  
  