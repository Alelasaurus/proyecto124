var nose_x=0;
var nose_y=0;
var nosee_x=0;
var nosee_y=0;
function preload() {
 kakashi=loadImage('https://i.postimg.cc/xXXmPs82/luffy.png');
 naruto=loadImage('https://i.postimg.cc/k2LbYxRt/zoro.png');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video,modeload);
  poseNet.on('pose',gotposes);
}

function draw() {
image(video,0,0,500,500);
//circle(nose_x,nose_y,30);
//fill(0, 249, 189);
//stroke(22, 223, 174 );
image(luffy,nose_x,nose_y,150,300);
image(Zoro,nosee_x,nosee_y,280,300);
}

function take_snapshot(){    
  save('myFilterImage.png');
}

function modeload(){
    console.log("modelo cargado");
}

function gotposes(results){
if(results.length>0){
  console.log(results);
  nose_x=results[0].pose.nose.x-160;
  nose_y=results[0].pose.nose.y-120;
  console.log("posicion de x="+nose_x);
  console.log("posicion de y="+nose_y);
  nosee_x=results[0].pose.nose.x+150;
  nosee_y=results[0].pose.nose.y-120;
  console.log("posicion de x="+nosee_x);
  console.log("posicion de y="+nosee_y);
}
}