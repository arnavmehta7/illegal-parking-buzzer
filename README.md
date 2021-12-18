# illegal-parking-buzzer 🔔 🚗 📛
# Made by ARNAV MEHTA,Ludhiana,Punjab
[Link to Website](https://illegalparking.netlify.app/)
### BEST FEATURES:-
It knows if there is an human in the frame, or some wall without anyone, just simple road, some furniture and terms it as NORMAL, to prevent any wrong prediction
<br/>




###### Model Detects any 2 Wheelers currently included in "ACTIVAS", Cars, and if it is a normal scene like people walking ...
##### STRUCTURE :- 
FILES ----> Contains the audio for running
 <br/>
 **Model Accuracy + Loss** --> Contains results after training [accuracy full 1]

 [Model Trained on about 355 images including images of people,different walls labelled as NORMAL because people shouldn't be labelled as something else]

 <br/>

 **MODELS **----> Best Teachable model contains the teachable machine model FILE which is saved after training.
            Converted Keras + tm-my-image-model are model weights + files + config for python and Javascript respectively
            Link of Model Contains a single link file to access the model on teachable machine from browser without saving anything locally
            <br/>
 **Illegal Parking Buzzer - working model.mp4** --> Is the Results acquired by model in live [i used my mobile camera as the input device and attached a laptop to speaker]


 <br/>
 Index.html ----> Structure of Website
 <br/>
 Script.js -----> Brain
 <br/>
 style.css -----> Design 
 <br/><br/>

2. Running the website
Open the index.html file to run the website locally otherwise go to "https://illegalparking.netlify.app/"
The prediction would be done on the user machine itself.
The STOP button would stop the souce of stream.
<br/><br/>

3. How is Made?
Due to more accuracy of teachable machine, teachable machine was used with more than 350images to train the model, the normal category received different varieties to prevent any mis-happening of the results.
Javascript {pure}, ml5.js, tensorflow.js is used to show the working of model in website
