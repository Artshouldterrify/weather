import React from 'react'
import { useState } from 'react'
import './Metrics.css'

function Metrics() {
    const [icon_1, setIconA] = useState(true)
    const [icon_2, setIconB] = useState(true)
    const [icon_3, setIconC] = useState(true)
    const [file, setFile] = useState(0)
    const images = ['', 'training_loss.png', 'cm.png', 'fig.png', 'training_loss_1.png']
    const [tr_img, setTrImg] = useState(1);

    function handleClick1() {
        if(icon_1 === true)
            setFile(1);
        else
            setFile(0);
        setIconA(!icon_1);
        setIconB(true);
        setIconC(true);
    }

    function handleClick2() {
        if(icon_2 === true)
            setFile(2);
        else 
            setFile(0);
        setIconB(!icon_2);
        setIconA(true);
        setIconC(true);
    }

    function handleClick3() {
        if(icon_3 === true)
            setFile(3);
        else 
            setFile(0);
        setIconC(!icon_3);
        setIconA(true);
        setIconB(true);
    }

    function handleSlide() {
        if(tr_img === 1)
            setTrImg(4);
        else
            setTrImg(1);
        console.log(images[`${tr_img}`]);
    }

    return (
    <div className="metrics">
        <div className="metrics-text">
            <h1><i className="fa-solid fa-chart-simple"></i>  <span style={{color:"orange"}}>Evaluation</span> Metrics</h1>
            <hr></hr>
            <div className="metrics-textbox" onClick={handleClick1}  style={icon_1 ? {} : {background: "black", color: "wheat"}}>
                <h1><i className={icon_1 ? "fa-solid fa-circle-plus" : "fa-solid fa-circle-xmark"}></i>  Training</h1> 
            </div>
            <div className="metrics-textbox" onClick={handleClick2} style={icon_2 ? {} : {background: "black", color: "wheat"}}>
                <h1><i className={icon_2 ? "fa-solid fa-circle-plus" : "fa-solid fa-circle-xmark"}></i>  Classification Accuracy</h1> 
            </div>
            <div className="metrics-textbox" onClick={handleClick3} style={icon_3 ? {} : {background: "black", color: "wheat"}}>
                <h1><i className={icon_3 ? "fa-solid fa-circle-plus" : "fa-solid fa-circle-xmark"}></i>  Network Structure</h1> 
            </div>
        </div>
        <div className="metrics-img">
            {(file === 0) && <p></p>}
            {(file === 1) && <div className="outer">
                <div className="inner-left">
                    <img src={images[`${tr_img}`]} alt="" />
                    <button className='btn-circle pos-right' onClick={handleSlide}><i className="fa-solid fa-arrow-right"></i></button>
                    <button className='btn-circle pos-left' onClick={handleSlide}><i className="fa-solid fa-arrow-left"></i></button>
                    <p className='graph-text'>{tr_img === 1 && ("Training Loss Curve")}{tr_img === 4 && ("Validation Loss Curve")}</p>
                </div>
                <div className="inner-right">
                    <div className="inner-textbox">
                        <h1>Training Accuracy: <span style={{fontSize: "24px"}}>91.59%</span></h1>
                        <p style={{fontSize: "16px"}}>Proportion of accurately classified examples in the training dataset.</p>
                    </div>
                    <div className="inner-textbox">
                        <h1>Testing Accuracy: <span style={{fontSize: "24px"}}>76.26%</span></h1>
                        <p style={{fontSize: "16px"}}>Proportion of accurately classified examples in the testing dataset.</p>
                    </div>
                    <div className="inner-textbox">
                        <h1>Training Loss: <span style={{fontSize: "24px"}}>0.2719</span></h1>
                        <p style={{fontSize: "16px"}}>Loss function value (Cross Entropy) on the training dataset.</p>
                    </div>
                    <div className="inner-textbox">
                        <h1>Testing Loss: <span style={{fontSize: "24px"}}>0.5983</span></h1>   
                        <p style={{fontSize: "16px"}}>Loss function value (Cross Entropy) on the testing dataset.</p>
                    </div>
                </div>
            </div>
            }
            {(file === 2) && <div className="matrix">
                <div className="matrix-image">
                    <img src={images[2]} alt="" />
                </div>
                <div className="matrix-metrics">
                    <div className="m-inner-textbox">
                            <h1>Precision: <span style={{fontSize: "24px"}}>76.7%</span></h1>
                            <p style={{fontSize: "12px"}}>The precision is the ratio tp / (tp + fp) where tp is the number of true positives and fp the number of false positives. The precision is intuitively the ability of the classifier not to label as positive a sample that is negative.</p>
                        </div>
                        <div className="m-inner-textbox">
                            <h1>Recall: <span style={{fontSize: "24px"}}>76.26%</span></h1>
                            <p style={{fontSize: "13px"}}>The recall is the ratio tp / (tp + fn) where tp is the number of true positives and fn the number of false negatives. The recall is intuitively the ability of the classifier to find all the positive samples.</p>
                        </div>
                        <div className="m-inner-textbox">
                            <h1>F-Score: <span style={{fontSize: "24px"}}>76.30%</span></h1>
                            <p style={{fontSize: "13px"}}>The F1 score can be interpreted as a harmonic mean of the precision and recall, where an F1 score reaches its best value at 1 and worst score at 0. </p>
                        </div>
                        <div className="m-inner-textbox">
                            <h1>B-Accuracy: <span style={{fontSize: "24px"}}>78.93%</span></h1>   
                            <p style={{fontSize: "13px"}}>The balanced accuracy in binary and multiclass classification problems to deal with imbalanced datasets. </p>
                        </div>
                </div>
            </div>
            }
            {(file === 3) && <div className="nn">
                <img src={images[3]} alt="" />
            </div>
            } 
        </div>
    </div>
  )
}

export default Metrics
