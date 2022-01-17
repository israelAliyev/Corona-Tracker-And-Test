import React, { Component , useState , useEffect} from 'react';
import "../css/what.css"

const What = () => {

    return(
        <div>


            <body>


                <div className="allT">
                    <div className="whatT">


                        <h1 className="aboutT">About CoronaVirus!</h1>


                    </div>


                    <article>
                        <h2>What is CoronaVirus?</h2>

                        <div className="des1"><h5>Coronavirus disease (COVID-19) is an infectious disease caused by a
                            newly discovered coronavirus.

                            Most people infected with the COVID-19 virus will experience mild to moderate respiratory
                            illness and recover without requiring special treatment. Older people, and those with
                            underlying medical problems like cardiovascular disease, diabetes, chronic respiratory
                            disease, and cancer are more likely to develop serious illness.

                            The best way to prevent and slow down transmission is to be well informed about the COVID-19
                            virus, the disease it causes and how it spreads. Protect yourself and others from infection
                            by washing your hands or using an alcohol based rub frequently and not touching your face.

                            The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose
                            when an infected person coughs or sneezes, so it’s important that you also practice
                            respiratory etiquette (for example, by coughing into a flexed elbow).</h5></div>
                    </article>

                    <article>
                        <h2 >Prevention</h2>
                        <h5 className="des1">To prevent infection and to slow transmission of COVID-19, do the
                            following:</h5>
                        <ul className="des1">
                            <li> Wash your hands regularly with soap and water, or clean them with alcohol-based hand
                                rub.
                            </li>
                            <li>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
                            <li> Avoid touching your face.</li>
                            <li>Cover your mouth and nose when coughing or sneezing.</li>
                            <li> Stay home if you feel unwell.</li>
                            <li> Refrain from smoking and other activities that weaken the lungs.</li>
                            <li> Practice physical distancing by avoiding unnecessary travel and staying away from large
                                groups of people.
                            </li>
                        </ul>
                    </article>

                    <article>
                        <h2 >Symptoms</h2>
                        <h5 className="des1">COVID-19 affects different people in different ways. Most infected people
                            will develop mild to moderate illness and recover without hospitalization.

                            Most common symptoms:
                        </h5>
                        <ul className="des1">
                            <li> fever.</li>
                            <li> dry cough.</li>
                            <li> tiredness.</li>

                        </ul>

                        <h2 > Less common symptoms:</h2>
                        <ul className="des1">
                            <li> aches and pains.</li>
                            <li> sore throat.</li>
                            <li> diarrhoea.</li>
                            <li> conjunctivitis.</li>
                            <li> headache.</li>
                            <li> loss of taste or smell.</li>
                            <li> a rash on skin, or discolouration of fingers or toes.</li>
                        </ul>
                        <h2 > Serious symptoms:</h2>

                        <h5 className="des1">

                            Difficulty breathing or shortness of breath.
                            chest pain or pressure.
                            loss of speech or movement.
                            Seek immediate medical attention if you have serious symptoms. Always call before visiting
                            your doctor or health facility.

                            People with mild symptoms who are otherwise healthy should manage their symptoms at home.

                            On average it takes 5–6 days from when someone is infected with the virus for symptoms to
                            show, however it can take up to 14 days.</h5>


                        <h2 >Protect yourself and others from
                            COVID-19

                        </h2>

                        <h5 className="des1">

                            If COVID-19 is spreading in your community, stay safe by taking some simple precautions,
                            such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds,
                            cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you
                            live and work. Do it all!

                        </h5>


                        <h2>What to do to keep yourself and
                            others safe from COVID-19.</h2>

                        <ul className="des1">

                            <li>Maintain at least a 1-metre distance between yourself and others to reduce your risk of
                                infection when they cough, sneeze or speak. Maintain an even greater distance between
                                yourself and others when indoors. The further away, the better.
                            </li>
                            <li>Make wearing a mask a normal part of being around other people. The appropriate use,
                                storage and cleaning or disposal are essential to make masks as effective as possible.
                            </li>
                            <li ><h5>Here are the basics of how to wear a mask:</h5></li>
                            <li>Clean your hands before you put your mask on, as well as before and after you take it
                                off, and after you touch it at any time.
                            </li>
                            <li>Make sure it covers both your nose, mouth and chin.</li>
                            <li>When you take off a mask, store it in a clean plastic bag, and every day either wash it
                                if it’s a fabric mask, or dispose of a medical mask in a trash bin.
                            </li>
                            <li>Don’t use masks with valves.</li>

                        </ul>

                        <h2 >How to make your environment
                            safer</h2>
                        <ul className="des1">
                            <li ><h5>Avoid the 3Cs: spaces that are closed, crowded or involve
                                close contact.</h5></li>
                            <li>Outbreaks have been reported in restaurants, choir practices, fitness classes,
                                nightclubs, offices and places of worship where people have gathered, often in crowded
                                indoor settings where they talk loudly, shout, breathe heavily or sing.
                            </li>
                            <li>The risks of getting COVID-19 are higher in crowded and inadequately ventilated spaces
                                where infected people spend long periods of time together in close proximity. These
                                environments are where the virus appears to spreads by respiratory droplets or aerosols
                                more efficiently, so taking precautions is even more important.
                            </li>
                            <li ><h5>Meet people outside.</h5></li>
                            <li ><h6>Outdoor gatherings are safer than indoor ones, particularly
                                if indoor spaces are small and without outdoor air coming in.</h6></li>

                            <li>For more information on how to hold events like family gatherings, children’s football
                                games and family occasions, read our Q&A on small public gatherings.
                            </li>

                            <li ><h5>Avoid crowded or indoor settings but if you can’t, then
                                take precautions:</h5></li>
                            <li>Open a window. Increase the amount of ‘natural ventilation’ when indoors.</li>
                            <li>WHO has published Q&As on ventilation and air conditioning for both the general public
                                and people who manage public spaces and buildings.
                            </li>
                            <li>Wear a mask (see above for more details).</li>
                        </ul>

                    </article>

                </div>

            </body>



        </div>
    );

}

export default What;