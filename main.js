noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ffe5b4');

    fill('gold');
    stroke('black');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML="Width & height of a square will be "+difference+"px";

}

function modelLoaded(){
    console.log("PoseNet is initiated");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x"+noseX+"nose y"+noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX="+leftwristX+"rightwristX"+rightwristX);
    }


}

