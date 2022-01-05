nosex=0;
nosey=0;
function preload(){
lipstick=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(lipstick,nosex,nosey,30,30)
}
function takeSnapshot(){
    save('image.png');
}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x+10;
        nosey=results[0].pose.nose.y-10;
        
    }
}