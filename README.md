# Weather Prediction App
A weather prediction app that predicts the weather in user-uploaded images using a tensorflow & keras based image-classification model based on the pre-trained MobileNetV2 model, trained on the Weather Classification and Weather Image Recognition datasets.

The model is run in the browser using tensorflowjs.
The model training code can be viewed [here.](https://colab.research.google.com/drive/1GT8M8Qi5-B2EgYSi_VDLKxdny7m18P-c?usp=sharing)

### 1. Dependencies 
This project requires the reactjs, react-scroll, tensorflowjs and http-server packages.
```
npm intall react-scroll
npm install @tensorflow/tfjs
npm install http-server
```

### 2. Running the App
Open a terminal and navigate to the directory in which this repository is downloaded.
```
cd path/to/directory
```
Run the following command to navigate to `public/tf_model` and open an http-server.
```
cd public/tf_model
http-server -c --cors
```
Open another terminal, navigate to the directory and start the app.
```
cd path/to/directory
npm start
```
