var noseX = 0;
var noseY = 0;
function preload() {
    mustache = loadImage('https://i.postimg.cc/1XyG8K68/mustache.png');
}
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Welcome to PoseNet!");
}
function draw() {
    image(video, 0, 0, 400, 300);
    image(mustache, noseX, noseY, 80, 35);
}
function savePhoto() {
    save("filter.jpg");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 40;
        noseY = results[0].pose.nose.x + 8;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}