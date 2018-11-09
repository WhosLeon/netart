

function windowResized(){
resizeCanvas(windowWidth,700);
}
function setup() {
createCanvas(windowWidth,700);


}
function draw(){

  if(mouseIsPressed){
fill(147,112,219);
ellipse(mouseX,mouseY,10,10);}

if (keyIsPressed === true) {
    fill(0);


push();
 translate(20,35);
 fill(255);
star(mouseX,mouseY,7,18,5);
pop();}

}


function star(x, y, radius1, radius2, npoints) {
var angle = TWO_PI / npoints;
var halfAngle = angle/2.0;
beginShape();
for (var a = 0; a < TWO_PI; a += angle) {
 var sx = x + cos(a) * radius2;
 var sy = y + sin(a) * radius2;
 vertex(sx, sy);
 sx = x + cos(a+halfAngle) * radius1;
 sy = y + sin(a+halfAngle) * radius1;
 vertex(sx, sy);
}
endShape(CLOSE);}
