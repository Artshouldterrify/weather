import React from 'react'
import './Description.css'

function Description() {
  return (
    <div className="desc">
        <div className="desc-img">
            <img src='back.gif' alt="" />
        </div>
        <div className="desc-text">
            <h1>What is this Project?</h1>
            <hr></hr>
            <div className="desc-textbox tensorflow">
                <h2><i className="fa-solid fa-brain"></i>The Task</h2>
                <br />
                <p>We have an image depicting some elements typical of certain weather conditions. The task is to use machine learning to classify and thus recognize the 
                    weather depicted in the image. <br />
                    We accomplish this using a <strong>Convolutional Neural Network</strong> written using <strong>tensorflow</strong> and <strong>keras</strong>. We 
                    train this network using transfer learning and fine-tuning, utlizing the pre-trained <strong>MobileNetV2</strong> model.
                </p>
                <button className='btn-1' type="button"><a href="https://www.tensorflow.org/tutorials/images/classification"><i className="fa-solid fa-arrow-up-right-from-square"></i> Read more</a></button>
            </div>
            <div className="desc-textbox kaggle">
                <h2><i className="fa-brands fa-kaggle"></i>The Data</h2>
                <br />
                <p>The dataset consists of images of landscapes, cityscapes and notable weather-related features during 6 different weather conditions.  
                The pictures are divided into 6 classes: <strong>Sunny, Cloudy, Foggy, Rainy, Snowy and Stormy.</strong>
                This dataset contains 5142 images of these different types of weather, and can be used for image classification and was formed as a combination of
                two separate orignal datasets: Harvard Dataverse's Weather Phenomenen Dataset and Kaggle's Weather Classification. 
                </p>
                <button className='btn-1' type="button"><a href="https://www.kaggle.com/datasets/jagadeesh23/weather-classification"><i className="fa-solid fa-arrow-up-right-from-square"></i> The Dataset</a></button>
            </div>
            <div className="desc-textbox github">
                <h2><i className="fa-brands fa-google"></i>The Code</h2>      
                <br />
                <p>We have an image depicting some elements typical of certain weather conditions. The task is to use machine learning to classify and thus recognize the 
                    weather depicted in the image. <br />
                    We accomplish this using a <strong>Convolutional Neural Network</strong> written using <strong>tensorflow</strong> and <strong>keras</strong>. We 
                    train this network using transfer learning and fine-tuning, utlizing the pre-trained <strong>ResNet50</strong> model.
                </p>
                <button className='btn-1' type="button"><a href="https://github.com/Artshouldterrify"><i className="fa-solid fa-arrow-up-right-from-square"></i> Read more</a></button>
            </div>
        </div>
    </div>
  )
}

export default Description
