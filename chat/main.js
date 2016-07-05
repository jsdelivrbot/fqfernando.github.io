var config = {
    apiKey: "AIzaSyCfy_C1kQrVJcoZgqd2_5UwteN-BuIeGc8",
    authDomain: "chat-app-34ab7.firebaseapp.com",
    databaseURL: "https://chat-app-34ab7.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  
  var chatData = firebase.database().ref();
  
  var name = window.prompt("PLACE REAL NAME HERE");
  console.log(name);
  
   $('#nameInput').val(name);
  
  function pushMessage(event) {
        if (event.keyCode == 13) {
        var text = $('#messageInput').val();
        chatData.push({name: name, text: text});  
        
      $('#messageInput').val('');
    }
  }
  
  
$('#messageInput').keypress(pushMessage);
  
  chatData.on("child_added", showMessage);

function showMessage(msg) {
    var message = msg.val();
    var messageSender = message.name;
    var messageContent = message.text;
    
    var messageEl = $("<div/>").addClass("message");
    var senderEl = $("<span/>").text(messageSender + ": ");
    var contentEl = $("<span/>").text(messageContent);
    
    messageEl.append(senderEl);
    messageEl.append(contentEl);
    $('#messages').append(messageEl);
    
    // var aSound = document.createElement('audio')
    // aSound.setAttribute('src', 'note.mp3')
    // aSound.play();


}
  
  