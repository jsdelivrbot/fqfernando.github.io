var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;

function preload() {
    playerImage = loadImage("https://media2.giphy.com/media/NuE5MTECOmQsU/200_s.gif");
    enemyImage = loadImage("fire.png");
}


function setup() {
    createCanvas(800, 600);
    isGameOver = false;
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/2, 0, 10, 30);
    
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationspeed = 3.0;
    
    
    
}


function draw() { 
    if (isGameOver) {
        gameOver(); 
    } else {
        
    background(0, 0, 100);
    drawSprites();
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
        player.position.x = player.position.x + 4
    }
    if(keyDown(LEFT_ARROW) && player.position.x > 25) {
        player.position.x = player.position.x - 4
    }
    
    enemy.position.y = enemy.position.y + 3;
    if(enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5)
    }
    if(enemy.overlap(player)) {
        isGameOver = true;
    }
    }

}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("WHITE");
    text("Game Over!, width/2, hieght/2");
    text("click anywhere to try again", width/2, 3*height/4);
    
}
function mouseClicked() {
   if (isGameOver) {
    isGameOver = false
    player.position.x = width/2;
    player.position.y = height-25;
    enemy.position.x = width/2;
    enemy.position.y = 0;
    
   }
}



