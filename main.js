bones_song = "";
baby_song = "";
function preload(){
    bones_song = loadSound("bones.mp3");
     baby_song = loadSound("baby.mp3");
}

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,530);
}
