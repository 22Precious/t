function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
    }
    
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
}


function draw(){
    background('#fcdce2');
    textSize(difference);
    Fill('#F90093');
    text(Precious,50,50)
}