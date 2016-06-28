var thatWasEasy = new Audio("police.mp3");
thatWasEasy.play() ;
function sayThatWasEasy() {
    var thatWasEasy = new Audio("police.mp3");
thatWasEasy.play() ;
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delagateKeypress);

function delagateKeypress(event) {
if (event.keyCode == 32) {
    $("#easy").trigger("click");
    }
}
