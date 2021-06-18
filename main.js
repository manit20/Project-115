function preload(){}

function setup(){
    canvas = createCanvas(320, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function draw(){
    image(video, 0, 0, 320, 300)
}

function take_snapshot(){
    save("filter_image.png");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}