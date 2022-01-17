import React, {useEffect, useState, useRef} from 'react';
import '../css/test.css'
import Start from './Start.js'
import testData from "../Data/data.json"
import Checkbox from "@material-ui/core/Checkbox"
import YourAnswers from "./YourAnswers";

const Test = () => {

    const [step, setStep] = useState(1);
    const [answer, setAnswer] = useState("");
    const [numberOfQuestion, setnumberOfQuestion] = useState(0);
    const [boolY, setBoolY] = useState(false);
    const [boolN, setBoolN] = useState(false);
    const [boolS, setBoolS] = useState(false);
    const [error, setError] = useState("");
    const [status, setStatus] = useState("");



    const mainFunction = () => {


        setBoolY(false)
        setBoolN(false)
        setBoolS(false)

        if (boolS === false && boolN === false && boolY === false) {

            setError("Any form can't be empty!")

        } else {

            testData.data[numberOfQuestion].answer = answer

            if (numberOfQuestion < testData.data.length - 1) {

                setnumberOfQuestion(numberOfQuestion + 1)


            } else {

                setnumberOfQuestion(0)
                setStep(3);

                if (testData.data[7].answer !== "") {

                    if (testData.data[0].answer === "yes" && testData.data[1].answer === "yes" && testData.data[2].answer === "yes" && testData.data[3].answer === "yes" && testData.data[4].answer === "yes" && testData.data[5].answer === "yes" && testData.data[6].answer === "yes" && testData.data[7].answer === "yes") {

                        setStatus("Call your health care provider or hotline for advice.Do not stay in contact with anyone in the family and do not leave the house. If you have to go outside, wear a mask and hygiene your hands.Otherwise, you could infect your family and other people with this virus and put them at risk of death.")

                    } else if (testData.data[0].answer === "no" && testData.data[1].answer === "no" && testData.data[2].answer === "no" && testData.data[3].answer === "no" && testData.data[4].answer === "no" && testData.data[5].answer === "no" && testData.data[6].answer === "no" && testData.data[7].answer === "no") {

                        setStatus("You do not have symptoms of coronavirus, so wear a mask when you come out because you can get viruses from patients outside. When you come home from the outside, hygene your hands to protect your family from the virus. If you feel any symptoms, pass the coronavirus test on Metbix.com and learn your result.")

                    }else if (testData.data[0].answer === "no" && testData.data[1].answer === "no" && testData.data[2].answer === "no" && testData.data[3].answer === "no" && testData.data[4].answer === "no" && testData.data[5].answer === "no" && testData.data[6].answer === "yes" && testData.data[7].answer === "no") {

                       setStatus("You have eaten a lot, so your stomach is growing.On the So, this indicates that you will gain weight, so reduce what you eat and start sports.Eating too much can lead to diabetes and other diseases in you.")
                    }else if (testData.data[0].answer === "yes" && testData.data[1].answer === "yes" && testData.data[2].answer === "no" && testData.data[3].answer === "no" && testData.data[4].answer === "no" && testData.data[5].answer === "no" && testData.data[6].answer === "no" && testData.data[7].answer === "no") {

                        setStatus("Normal temperature in humans is usually around 37 ° C (98.6 ° F) Fever is usually a sign that your body is trying to fight a disease or infection Cough is a way our bodies get rid of foreign particles, irritants and germs. There are two types of cough - itchy dry cough and chest cough. Cough and fever can be caused by cold.")
                    }else if (testData.data[0].answer === "no" && testData.data[1].answer === "yes" && testData.data[2].answer === "no" && testData.data[3].answer === "no" && testData.data[4].answer === "no" && testData.data[5].answer === "no" && testData.data[6].answer === "no" && testData.data[7].answer === "no") {

               setStatus("Normal temperature in humans is usually around 37 ° C (98.6 ° F).Fever is not a disease.You get a fever because your body is trying to kill the virus or bacteria that caused the infection.However, if your fever is very high and it has not fallen, call the hospital or go to the doctor because high fever may be a symptom of CoronaVirus or strong disease")
                    }else if (testData.data[0].answer === "yes" && testData.data[1].answer === "no" && testData.data[2].answer === "no" && testData.data[3].answer === "no" && testData.data[4].answer === "no" && testData.data[5].answer === "no" && testData.data[6].answer === "no" && testData.data[7].answer === "no") {
                     setStatus("Coughing, by forcing air out of the lungs under high pressure, attempts to clear the throat of these foreign particles. There are two types of cough – a dry cough which is itchy and a chesty cough (also called a productive cough because it generates phlegm).Most will go away in a few days. After a cold, though, some \"dry\" coughs last weeks or months. ")
                    }
                    else{
                        setStatus("Symptoms are one of the symptoms of the Corona Virus. Please go to the hospital and have the doctors examine yourself and find out your result. Wear a mask when you leave the house and hygiene your hands when you return home, otherwise you can leave your family and other people face to face with death.")
                    }
                }

            }

        }


    }


    const checkedFunc = (e) => {
        setError("")

        if (e === "yes") {
            setBoolY(true)
            setBoolN(false)
            setBoolS(false)

        }

        if (e === "no") {
            setBoolY(false)
            setBoolN(true)
            setBoolS(false)
        }

        if (e === "sometimes") {
            setBoolY(false)
            setBoolN(false)
            setBoolS(true)
        }
    }


    return (

        <div>


            <div className="test_header">

                <h2 className='test_header_text'>CoronaVirus Test</h2>

            </div>

            {step === 1 &&
            <div className="test_questions">
                <Start/>
            </div>
            }


            {step === 2 &&
            <div className="test_questions">


                <div className='question_div'>

                    <h2 className='question_text'>{testData.data[numberOfQuestion].question}</h2>


                    {error !== "" &&

                    <div className="alert alert-danger error_div">
                        <strong style={{color: "#721c24"}}>Error!:</strong> {error}
                    </div>

                    }

                    {error === "" &&

                    <div
                        className={numberOfQuestion === 2 ? "alert alert-primary description_div2" : "alert alert-primary description_div"}>
                        <strong style={{color: "#92272f"}}>{testData.data[numberOfQuestion].description}</strong>
                    </div>

                    }

                </div>

            </div>
            }


            {step === 3 &&

            <div className="test_status">

                <div className="alert alert-success status_div">
                    <strong>{status}</strong>
                </div>

            </div>

            }


            <div className="test_informations">


                {step === 3 &&
                <YourAnswers/>
                }


                {step === 1 &&

                <div>

                    <img width='780px' src="./images/step1.jpg"/>

                </div>
                }

                {step === 2 &&

                <div className='whenTest'>

                    <br/>

                    <h3>YOUR ANSWERED</h3>

                    <h1>{numberOfQuestion}/8</h1>


                    <br/>
                    <h3>QUESTIONS</h3>

                </div>
                }


            </div>


            <div className="test_inputs">

                {step === 1 &&
                <a className='start_button' onClick={(e) => setStep(2)}>Start</a>
                }


                {step === 2 &&

                <div className='checkbox_div'>

                    <Checkbox name="check" color='primary' value='yes' onChange={(e) => setAnswer(e.target.value)}
                              onClick={(e) => checkedFunc(e.target.value)} checked={boolY}/>
                    <label htmlFor="yes">Yes</label>
                    <Checkbox name="check" color='primary' value='no' onChange={(e) => setAnswer(e.target.value)}
                              onClick={(e) => checkedFunc(e.target.value)} checked={boolN}/>
                    <label htmlFor="no">No</label>
                    <Checkbox name="check" color='primary' value='sometimes' onChange={(e) => setAnswer(e.target.value)}
                              onClick={(e) => checkedFunc(e.target.value)} checked={boolS}/>
                    <label htmlFor="sometimes">Sometimes</label>
                    <button className='btn btn-primary' type='button' onClick={mainFunction}>Next</button>


                </div>
                }

                {step === 3 &&

                <a className='try_button' onClick={(e) => setStep(2)}>Try It</a>
                }


            </div>


        </div>

    );

}

export default Test;

