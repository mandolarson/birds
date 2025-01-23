function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightblue');
  fill('yellow');
  ellipse(350, 50, 50, 50);
  fill('lightblue');
  scale(0.2);
  bird(0, 0);
  bird(width/2, height*2);
  bird(width, height*3);
  bird(width*2 + 30, height);
  bird(width*2, height*2);
  bird(width*3, height*3);
  bird(width*4, height*4); 
}

function bird(x, y){
  push();
  translate(x, y);
  beginShape();
  vertex(0, height);
  vertex(width/4, 180);
  vertex(width/2, height);
  vertex((width/3 * 2), 180);
  vertex(width, height);
  endShape();
  pop();
}