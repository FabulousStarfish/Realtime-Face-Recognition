function setup(){
    canvas=createCanvas(337.5, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-NPLdWkbf/model.json',modelLoaded);
}
function modelLoaded(){
    console.log("MODEL LOADED !")
}
function draw(){
    image(video,0,0,337.5,300);
    classifier.classify(video,checkImages);
}
function checkImages(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2);
    }
}
