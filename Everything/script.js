console.log('attached');
const URL = "https://teachablemachine.withgoogle.com/models/K4JuZnTWX/";

let model, webcam, labelContainer, maxPredictions;


var aud = document.getElementById("wakeUpAudio");
function playAud() { 
   aud.play(); 
 }
function pauseAud() { 
   aud.pause(); 
 }


async function init() {
     
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";


        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(600,500, flip); // width, height, flip
        await webcam.setup({ facingMode: "environment" }); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
      
  }


  async function loop() {
      webcam.update(); // update the webcam frame

      await predict();
      window.requestAnimationFrame(loop);
  }

  // run the webcam image through the image model
  async function predict() {
      // predict can take in an image, video or canvas html element
      // console.log('Taking a break...');
    // await sleep(4000);
    // console.log('Two seconds later, showing sleep in a loop...');
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
          const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
       // don't play audio when head's neutral with probability >= 75%
            console.log(prediction[0].probability.toFixed(2));
           if (prediction[0].probability.toFixed(2) >= 0.90 || prediction[0].probability.toFixed(2) >= 0.90)
                playAud();
               
           else
               pauseAud();
           }

      }


  

async function stop() {
  location.reload();
    // await webcam.stop();
    // document.getElementById("webcam-container").removeChild(webcam.canvas);
    // document.getElementById("label-container").innerHTML =  "";
    
}