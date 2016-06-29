var NUM_CIRCLES = 20;
var circleDiameter;
var circleradius;
var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(1350,720);
    
    frameRate(5);
    
    circleDiameter = width/NUM_CIRCLES;
    circleradius = circleDiameter/2;
    
    rVal = 255;
    gVal = 0;
    bVal = 0;
}

function draw() {
    rVal = 33;
    gVal = 80;
    bVal = 151;
    
    var isShifted = false;
    
}
    var y = 0;
    while (y <= height) {
        
        var x;
        
        if (isShifted) {
            x = circleradius;
        } else {
          x = 0;
        }
        
        while (x <= width) {
            fill(color(rVal, gVal, bVal));
                if (Math.abs(mouseX-x) <  & && Math.abs(mouseY-y) < 15){
                fill(color(247,202,201))
                
            }
            stroke(color(0, 0, 0 ));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
         
        y = y + circleradius;
        isShifted = !isShifted;
        
        rVal = rVal -0
        gVal = gVal +5
        bVal = bVal +7
        
    }  



