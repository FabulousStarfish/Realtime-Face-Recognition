function setup(){
    canvas=createCanvas(337.5, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,337.5,300);
}