import React from 'react';
import './upImage.css';
import { useState, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

const model_url = 'http://127.0.0.1:8080/model.json';
const model = await tf.loadLayersModel(model_url);
const labels = ['Cloudy', 'Foggy', 'Rainy', 'Snowy', 'Stormy', 'Sunny'];
console.log(model);

function Image() {
  const [state, setState] = useState(0);
  const [file, setFile] = useState(null);
  const [wPredict, setwPredict] = useState(-1);
  const [wPredictVals, setwPredictVals] = useState(null);
  const hiddenFileInput = useRef(null)

  function handleImage(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setState(1);
  };

  function handleClick(e) {
    console.log("Click Event.");
    hiddenFileInput.current.click();
  };

  function removeSetImage(e) {
    console.log("Remove event.");
    setFile(null);
    setState(0);
  };

  function predictImage(e) {
    console.log("Predicting..")
    const inputImage = document.getElementById("img-c");
    const inputImageTensor = tf.expandDims(tf.cast(tf.browser.fromPixels(inputImage), 'float32'), 0);
    const resizedImage = tf.image.resizeBilinear(inputImageTensor, [224, 224]);
    const normalizedImage = tf.mul(tf.sub(tf.div(resizedImage, 255), 0.5), 2);
    console.log(normalizedImage);
    let prediction = model.predict(normalizedImage).dataSync();
    let predictionStrings = ['', '', '', '', '', '', '', ''];
    setState(2);
    let maxVal = -1000.00;
    let classVal = -1;
    for(let i = 0; i<=5; ++i)
    {
      if(prediction[i] > maxVal)
      {
        maxVal = prediction[i];
        classVal = i;
      }
      predictionStrings[i] = prediction[i].toFixed(3); 
    }
    setwPredictVals(predictionStrings);
    setwPredict(classVal);
  }

  return (
    <div className="upload">
        <div className="upload-left">
          <div className="left-up">
              <p className='cont'>
                  <strong>Weather<span style={{color:'lightblue'}}>Predict</span></strong> is a <strong style={{color: 'yellow'}}>Convolutional Neural Network</strong> trained to recognize the weather from everyday images. Upload an image to try it out.
              </p>
              <br />
              <br />
              <br/>
          </div>
          {state === 0 && (<div className="left-down">
          <button className='btn' onClick={handleClick}>
              <i className="fa-solid fa-upload"><span>  </span>Upload your Image!</i> 
          </button>
          <input type="file" onChange={handleImage} ref={hiddenFileInput} style={{display: 'none'}}/>
          <br />
          <span>(This model works best on images that show at least some indicators of weather, i.e. a landscape/a cityscape as opposed to an indoor photo.)</span>
          </div>)}
          {state === 1 && (<div className="left-down">
          <p style={{fontSize: "35px"}}><strong>Image Uploaded Successfully!</strong></p>
          <br />
          <span>Press <span style={{color: 'lightblue', fontWeight: "bolder"}}>(Predict)</span> to predict the weather in this image.</span>
          <span>Press <span style={{color: 'lightblue', fontWeight: "bolder"}}>(Remove Current Image)</span> to remove the current selection.</span>
          </div>)}
          {state === 2 && (<div className="left-down">
          <p style={{fontSize: "35px"}}><strong>The Weather is <span style={{color: 'lightblue', fontWeight: "bolder", fontSize: "45px", 
          textDecoration:"underline"}}>{labels[`${wPredict}`]}!</span></strong></p>
          <br />
          <p style={{fontSize: "17px"}}>The Softmax Score of each category of weather indicates how likely the image is to be classified under that category.</p>
          <p style={{fontSize: "17px"}}>Hover over each category to see how likely the model thinks each is.</p>
          <div className="softmax">
            <div className="softmax-item"><i className="fa-solid fa-cloud-sun"></i>  {labels[0]} <br /><p>Softmax Score: {wPredictVals[0]}</p></div>
            <div className="softmax-item"><i className="fa-solid fa-smog"></i>  {labels[1]} <br /><p>Softmax Score: {wPredictVals[1]}</p></div>
            <div className="softmax-item"><i className="fa-solid fa-cloud-showers-heavy"></i>  {labels[2]} <br /><p>Softmax Score: {wPredictVals[2]}</p></div>
            <div className="softmax-item"><i className="fa-regular fa-snowflake"></i>  {labels[3]} <br /><p>Softmax Score: {wPredictVals[3]}</p></div>
            <div className="softmax-item"><i className="fa-solid fa-cloud-bolt"></i>  {labels[4]} <br /><p>Softmax Score: {wPredictVals[4]}</p></div>
            <div className="softmax-item"><i className="fa-solid fa-sun"></i>  {labels[5]} <br /><p>Softmax Score: {wPredictVals[5]}</p></div>
          </div>
          <br />
          <span>Press <span style={{color: 'lightblue', fontWeight: "bolder"}}>(Remove Current Image)</span> to remove the current selection.</span>
          </div>)}
        </div>   
        <div className="upload-right">
            {state === 0 && (<div className="dotted-img">
                <p>Your Image here.</p>
            </div>)}
            {state === 1 && (<div className="up-img-cont">
                <div className="up-img-up">
                    <img src={file} alt="Uploaded." id="img-c"/>
                </div>
                <div className="up-img-down">
                  <button className='btn' onClick={removeSetImage}><i className="fa-solid fa-trash"></i> Remove Current Image</button>
                  <button className='btn' onClick={predictImage}><i className="fa-solid fa-bullseye"></i> Predict</button>
                </div>
            </div>)}
            {state === 2 && (<div className="up-img-cont">
                <div className="up-img-up">
                    <img src={file} alt="Uploaded." id="img-c"/>
                </div>
                <div className="up-img-down">
                  <button className='btn-p btn' onClick={removeSetImage}><i className="fa-solid fa-trash"></i> Remove Current Image</button>
                </div>
            </div>)}
        </div>     
    </div>
  )
}

export default Image
