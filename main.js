function starclassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ix7AwHfzh/model.json",model_loaded)
}
function model_loaded(){
    classifier.classify(gotResult)

    console.log("model is loaded")
}

function gotResult(error,result){
    if(error){
        console.error(error)
    }
    else {
        console.log(result)
        document.getElementById("result_label").innerHTML="i can hear "+result[0].label
        document.getElementById("result_confidence").innerHTML="accuracy "+(result[0].confidence*100).toFixed(2)+"%"

        img1=document.getElementById("alien1")
        img2=document.getElementById("alien2")
        img3=document.getElementById("alien3")
        img4=document.getElementById("alien4")

        if(result[0].label=="Background Noise"){
            img1.src="aliens-01.gif"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
            
        }
        else   if(result[0].label=="clap"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.gif"
            img3.src="aliens-03.png"
            img4.src="aliens-04.png"
            
        }
        else   if(result[0].label=="snap"){
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.gif"
            img4.src="aliens-04.png"
            
        }
        else  {
            img1.src="aliens-01.png"
            img2.src="aliens-02.png"
            img3.src="aliens-03.png"
            img4.src="aliens-04.gif"
            
        }


    }
}