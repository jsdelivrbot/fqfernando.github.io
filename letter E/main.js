var rotate;
var sound;

// function playsound() {
//     console.log("play sound 1");
//     sound = new Audio("remix2.mp3");
//     sound.play();
//     console.log("play sound 2");

// }


function setup() {
    createCanvas(1000, 600, WEBGL);
    // sound = loadSound('remix2.mp3');

    noStroke();


}

function draw() {
    background(100);
    noStroke();



    rotate = Math.floor(Math.random() * 8);
    push();
    translate(-300, 200);
    rotateX(random);
    rotateY(random);
    box(50);
    pop();






    var position = -300;

    for (var i = 0; i < 8; i++) {

        push();
        translate(position, 200);
        position = position + 50;
        rotateX(rotate);
        rotateY(rotate);
        box(50);
        pop();
    }
    var position2 = 200

    for (var j = 0; j < 11; j++) {
        push();
        translate(-300, position2);
        position2 = position2 - 50;
        rotateX(rotate);
        rotateY(rotate);
        box(50);
        pop();
    }

    var position3 = -100

    for (var a = 0; a < 4; a++) {
        push();
        translate(position3, -50);
        position3 = position3 - 50;
        rotateX(rotate);
        rotateY(rotate);
        box(50);
        pop();
    }

    var position4 = 50

    for (var f = 0; f < 8; f++) {

        push();
        translate(position4, -300);
        position4 = position4 - 50;
        rotateX(rotate);
        rotateY(rotate);
        box(50);
        pop();
    }

}

// function playSound(event) {
//     console.log(event.keyCode);
//     if (event.keyCode == 32) {
//         console.log("dk 1");
//         playsound();
//         console.log("dk 2");

//     }
// }
// console.log("one");
// $(document).on("click", playsound);
// console.log("two");

// $(document).keypress(playSound);
// console.log("keypress")

//         playsound();
//         background(random(255), random(255), random(255));