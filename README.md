# illegal-parking-buzzer
# Made by ARNAV MEHTA,Ludhiana,Punjab
[Link to Website](https://illegalparking.netlify.app/)
###### Model Detects any 2 Wheelers currently included in "ACTIVAS", Cars, and if it is a normal scene like people walking ...
1. Structure
FILES----> Contains the audio for running
Model Accuracy + Loss --> Contains results after training [accuracy full 1]
[Model Trained on about 355 images including images of people,different walls labelled as NORMAL because people shouldn't be labelled as something else]
MODELS ----> Best Teachable model contains the teachable machine model FILE which is saved after training.
           Converted Keras + tm-my-image-model are model weights + files + config for python and Javascript respectively
           Link of Model Contains a single link file to access the model on teachable machine from browser without saving anything locally
Illegal Parking Buzzer - working model.mp4 --> Is the Results acquired by model in live [i used my mobile camera as the input device and attached a laptop to speaker]
Index.html ----> Structure of Website
Script.js -----> Brain
style.css -----> Design 


2. Running the website
Open the index.html file to run the website locally otherwise go to "https://illegalparking.netlify.app/"
The prediction would be done on the user machine itself.
The STOP button would stop the souce of stream.


3. How is Made?
Due to more accuracy of teachable machine, teachable machine was used with more than 350images to train the model, the normal category received different varieties to prevent any mis-happening of the results.
Javascript {pure}, ml5.js, tensorflow.js is used to show the working of model in website
