https://teachablemachine.withgoogle.com/models/88a4ROlx6/.json

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/88a4ROlx6/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    rr=Math.floor(Math.random()*255)+1;
    rg=Math.floor(Math.random()*255)+1;
    rb=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML="I Can Hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy - " + ( results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+rr+","+rg+","+rb+")";
    document.getElementById("result_confidence").style.color="rgb("+rr+","+rg+","+rb+")";
    img1=document.getElementById("alien1");
    img2=document.getElementById("alien2");
    img3=document.getElementById("alien3");
    img4=document.getElementById("alien4");
    if (results[0].label == "Clap") {
      img1.src="animal-01.gif";
      img2.src="animal-02.png";
      img3.src="animal-03.png";
      img4.src="animal-04.png";
    } else if (results[0].label == "Bell") {
      img1.src="animal-01.png";
      img2.src="animal-02.gif";
      img3.src="animal-03.png";
      img4.src="animal-04.png";

    } else if (results[0].label == "Snaping") {
      img1.src="animal-01.png";
      img2.src="animal-02.png";
      img3.src="animal-03.gif";
      img4.src="animal-04.png";
    }else{
      img1.src="animal-01.png";
      img2.src="animal-02.png";
      img3.src="animal-03.png";
      img4.src="animal-04.gif";

    }
    
    }
  }
