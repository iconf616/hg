pred_1="";
pred_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
   
function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log("ml5 version : ", ml5.version);

classifier=ml5.imageClassifier(" https://teachablemachine.withgoogle.com/models/8cTNL7bq_/model.json" , modelloaded);

function modelloaded()
{
    console.log("modal_loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1="THE FIRST PREDICTION IS " + pred_1;
    speak_data_2="AND THE SECOND PREDICTION IS " + pred_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);

}
function check()
{
    img=document.getElementById("captured_image");
    classifier.classify( img , gotResult);
}
function gotResult(error , results)
{ 
    if(error)
    {
        console.error(error);
    }
    else{

        console.log(results)
        document.getElementById("name_1").innerHTML=results[0].label;
        document.getElementById("name_2").innerHTML=results[1].label;
        pred_1=results[0].label;
        pred_2=results[1].label;
        speak();
        if( results[0].label == "happy")
        {
            document.getElementById("emoji_1").innerHTML= "&#128520;";
        }

        if( results[0].label == "sad")
        {
            document.getElementById("emoji_1").innerHTML= "&#128520;";
        }

        if( results[0].label == "angry")
        {
            document.getElementById("emoji_1").innerHTML= "&#128520;";
        }


        if( results[1].label== "happy")
        {
            document.getElementById("emoji_2").innerHTML= "&#128520;";
        }

        if( results[1].label == "sad")
        {
            document.getElementById("emoji_2").innerHTML= "&#128520;";
        }

        if( results[1].label== "angry")
        {
            document.getElementById("emoji_2").innerHTML= "&#128520;";
        }
    }
}




