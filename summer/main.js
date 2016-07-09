var backgroundImage;
var ballImage;
var ball;
var walll;
var wallr;
var wallt;
var wallb;
var paddle;
var gameover;
var score;


function preload() {
    backgroundImage = loadImage("beach.jpg");
    ballImage = loadImage("ball.png");

    
}

function setup() {
    
    createCanvas(800, 500);
    ball= createSprite(200, 250, 100, 100);
    ball.addImage(ballImage);
    ball.setSpeed(20,40);
    wallt= createSprite(width/2,0,width,5);
    wallr= createSprite(width,height/2,5,height);
    walll= createSprite(0,height/2,5,height);
    wallb= createSprite(width/2,height,width,5);
    walll.immovable = true;
    wallt.immovable = true;
    wallr.immovable = true;
    wallb.immovable = true;
    paddle = createSprite(width/2,480, 100, 5);
    paddle.immovable = true;
    gameover = false;
    score = 0 
    
    
    
    
}

function draw(){
    if (gameover){
        background(0);
        console.log("text")
        fill(255);
        textAlign(CENTER); 
        text("GAME OVER, CLICK TO RESTART", width/2, height/2);
    }else{
   
    paddle.position.x = constrain(mouseX, 50, 750);
    background(backgroundImage);
    drawSprites();
    ball.bounce(walll);
    ball.bounce(wallt);
    ball.bounce(wallr);
    paddle.position.x = mouseX;
    ball.bounce(paddle, function() {
        score = score + 100;
        console.log(score);
    });
    }
    
    if(ball.overlap (wallb)) {
        gameover = true;
        }
    text(score, 0, 80,30)
     
     
}

function mousePressed(){
    if (gameover){
        gameover = false;
        ball.position.x = width/2;
        ball.position.y = height/2;
        score = 0;
    }
    
}