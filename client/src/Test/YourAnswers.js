
import React, { Component , useState , useEffect} from 'react';
import testData from "../Data/data.json"
import '../css/test.css'



const YourAnswers = () => {


    return(
        <div>




            <section className="modal-card-body content">


                {

                    testData.data.map((question , i = 0) => (


                        <div>
                        <ul className="co-md-4 result_ul">
                    <li  className="co-md-4">

                        <p className='question_paragraf'><strong>{question.question}</strong></p>


                        <p className='p-2 answer_paragraf'>Your answer: { testData.data[i++].answer }</p>

                        <hr/>
                    </li>


                </ul>

                        </div>

                    ))}

            </section>

        </div>
    );

}

export default YourAnswers;


