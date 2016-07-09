var backgroundImage;
var player;
var ball;
var ballImage;
var walll;
var wallr;
var wallt;
var wallb;
var goalr;
var goall;

function preload() {
    backgroundImage = loadImage("socfield.png");
    ballImage = loadImage("soccerball.png");
}
    
function setup(){
    createCanvas(900,500);
    ball= createSprite(200, 383, 0, 0);
    ball.addImage(ballImage);
    ball.setSpeed(8,180);
    goall= createSprite(30,250,60,150);
    goalt= createSprite(870,250,60,150);
    wallt= createSprite(width/2,0,width,5);
    wallr= createSprite(width,height/2,5,height);
    walll= createSprite(0,height/2,5,height);
    wallb= createSprite(width/2,height,width,5);
    walll.immovable = true;
    wallt.immovable = true;
    wallr.immovable = true;
    wallb.immovable = true;
    
}

function draw(){
    background(backgroundImage);
    drawSprites();
    ball.bounce(walll);
    ball.bounce(wallt);
    ball.bounce(wallr);
    ball.bounce(wallb);
    if (ball.overlap(goall)) {
    scorePoint();
      ball.position.x=450;
        ball.position.y=250;
    }
    if (ball.overlap(goalt)) {
        scorePoint();
        ball.position.x=450;
        ball.position.y=250;
    }
    
    
    // ball.draw = function() { ellipse(0, 0, 7.5, 7.5) };
    // ball.shapeColor = color(255,43,70);
    // ball.posit    ball.pos;
    // ball.position.y= mouseY;
    // console.log(ball.position.x);
    
    // strokeWeight(8); 
    // stroke(255);
    // line(80, 485, 820, 485);
    // strokeWeight(8); 
    // stroke(255);
    // line(80, 15, 820, 15);
    // strokeWeight(8); 
    // stroke(255);
    // line(820, 15, 820, 485);
    // strokeWeight(8); 
    // stroke(255);
    // line(80, 15, 80, 485);
    // rect(40, 187.5, 40, 125);
    // rect(820, 187.5, 40, 125);
    // line(450, 15, 450, 485);
    
}

function scorePoint() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("SCORE!", width/2, height/2);
}