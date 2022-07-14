song ="";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload() {
    song = loadSound("MERA BHAI TU OFFICIAL SONG.mp3");
    song = loadSound("O MEHNDI PYAR WALI.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotposes(results) {
    if(results.length > 0){

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
    }
}

function draw(){
    image(video,0,0,600,500);
}

function SongName() {
    song.play();
}