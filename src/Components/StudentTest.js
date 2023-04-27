import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import '../Css/RadioButton.css'
import axios from 'axios'




export default function StudentTest() {

  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState("");
  const [question, setQuestion] = useState([])
  const [data, setData] = useState([])
  const [isActive, setIsActive] = useState(0);
  const [clickedButtonIndexes, setClickedButtonIndexes] = useState([]);
  const [correctans, setCorrectAns] = useState("")


  // const questions = [
  //   {
  //     id: 1,
  //     question: 'What is the capital of France?',
  //     options: [
  //       { id: 1, label: 'Paris' },
  //       { id: 2, label: 'London' },
  //       { id: 3, label: 'Berlin' },
  //       { id: 4, label: 'Madrid' },
  //     ],
  //   },

  //   {
  //     id: 2,
  //     question: 'What is the capital of India?',
  //     options: [
  //       { id: 1, label: 'Delhi' },
  //       { id: 2, label: 'Maharashtra' },
  //       { id: 3, label: 'Karnataka' },
  //       { id: 4, label: 'Uttar Pradesh' },
  //     ],
  //   },

  //   {
  //     id: 3,
  //     question: 'What is the speed of sound?',
  //     options: [
  //       { id: 1, label: '420 m/s' },
  //       { id: 2, label: '320 m/s' },
  //       { id: 3, label: '500 m/s' },
  //       { id: 4, label: '600 m/s' },
  //     ],
  //   },

  //   {
  //     id: 4,
  //     question: 'How many bones are there in human body?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     question: 'How many bones are there in human body1?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     question: 'How many bones are there in human body3?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     question: 'How many bones are there in human body4?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     question: 'How many bones are there in human body5?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 12,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 13,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 14,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 15,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 16,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 17,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 18,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 19,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 20,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 21,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 22,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 23,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 24,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 25,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 26,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 27,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 28,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 29,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },
  //   {
  //     id: 30,
  //     question: 'How many bones are there in human body2?',
  //     options: [
  //       { id: 1, label: '206' },
  //       { id: 2, label: '300' },
  //       { id: 3, label: '506' },
  //       { id: 4, label: '800' },
  //     ],
  //   },


  //   // Add more questions here
  // ];


  useEffect(() => {
    const newData = {
      user_id: localStorage.getItem("user_id"),
      test_name: "Test1"
    }

    axios.post("http://localhost:8080/testsubject/view", newData)
      .then((res) => setQuestion(res.data[0].question))
      .catch((err) => console.log(err))

    const data1 = { user_id: localStorage.getItem("user_id") }

    axios.post("http://localhost:8080/subques/view", data1)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  // const handleAnswerSelect = (optionId) => {
  //   const newAnswers = [...answers];
  //   newAnswers[currentQuestion] = optionId;
  //   setAnswers(newAnswers);
  // };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleNextQuestion = () => {
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };


  const handleRoundButtonSelect = (questionId) => {
    const clickedButtonIndex = questionId - 1;
    setIsActive(clickedButtonIndex);
    setClickedButtonIndexes([...clickedButtonIndexes, clickedButtonIndex]);
    setCurrentQuestion(clickedButtonIndex);
  };
  // console.log(isActive);


  return (
    <>
      <div className='mt-2 lg:flex w-12'>
        <div className='lg:w-9 w-12'>
          <h2 className='text-left lg:ml-8'>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</h2>
          <div className='mt-5 border-1 py-2 lg:ml-8 lg:h-30rem h-20rem ml-2 px-5 mr-2 text-left'>
            <h1 className='lg:text-center text-left'>Question {currentQuestion + 1}</h1>
            <p className='lg:mt-6'>Question: {question[currentQuestion]}</p>
            {/* {questions[currentQuestion].options.map((option) => (
              <div key={option.id} className="mt-3 ml-3">
                <RadioButton
                  className='lg:mt-3'
                  inputId={`option${option.id}`}
                  name={`option${option.id}`}
                  value={option.id}
                  onChange={() => handleAnswerSelect(option.id)}
                  checked={answers[currentQuestion] === option.id}
                />
                <label htmlFor={`option${option.id}`}
                  className="ml-1">{option.label}</label>
              </div>
            ))} */}
            {data.map((item) => {
              if (question[currentQuestion] === item.question) {
                return (
                  <>
                    <div key={item.id} className="mt-3">
                      <RadioButton
                        className='lg:mt-3'
                        inputId={`option${item.id}`}
                        name={`option${item.id}`}
                        value={item.option1}
                        onChange={(e) => setAnswers(e.target.value)}
                        checked={answers === item.option1}
                      />
                      <label htmlFor={`option${item.id}`}
                        className="ml-1">{item.option1}</label>
                    </div>
                    <div key={item.id} className="mt-3">
                      <RadioButton
                        className='lg:mt-3'
                        inputId={`option${item.id}`}
                        name={`option${item.id}`}
                        value={item.option2}
                        onChange={(e) => setAnswers(e.value)}
                        checked={answers === item.option2}
                      />
                      <label htmlFor={`option${item.id}`}
                        className="ml-1">{item.option2}</label>
                    </div>
                    <div key={item.id} className="mt-3">
                      <RadioButton
                        className='lg:mt-3'
                        inputId={`option${item.id}`}
                        name={`option${item.id}`}
                        value={item.option3}
                        onChange={(e) => setAnswers(e.value)}
                        checked={answers === item.option3}
                      />
                      <label htmlFor={`option${item.id}`}
                        className="ml-1">{item.option3}</label>
                    </div>
                    <div key={item.id} className="mt-3">
                      <RadioButton
                        className='lg:mt-3'
                        inputId={`option${item.id}`}
                        name={`option${item.id}`}
                        value={item.option4}
                        onChange={(e) => setAnswers(e.value)}
                        checked={answers === item.option4}
                      />
                      <label htmlFor={`option${item.id}`}
                        className="ml-1">{item.option4}</label>
                    </div>
                  </>
                )
              }if(answers === item.correctans){
                setCorrectAns("")
              }
            })}
          </div>
        </div>
        <div className='lg:w-3 w-12 mt-1'>
          <div className='border-1 mt-2 lg:mt-8 lg:ml-3 lg:ml-0 lg:mr-2
        mr-2 p-1 lg:h-25rem h-9rem overflow-y-scroll'>
            {
              question.map((item, index) => {

                return (
                  <>
                    <Button
                      label={index + 1}
                      onClick={() => {
                        handleRoundButtonSelect(index + 1)

                      }}
                      className={`mt-3 lg:w-3 mr-2 lg:ml-0 ml-1 p-button-secondary ${clickedButtonIndexes.includes(index) ? 'p-button-success' : ''}
                  ${isActive === index ? 'p-button-danger' : ''}`}
                    />
                  </>
                )
              })
            }
          </div>
          <div className='flex justify-content-center lg:ml-3 ml-1 py-1 text-center mt-4 border-1
          mr-1'>
            <Button label="Submit" className="mr-1 p-button-sm p-button-danger" />
            <Button label="Previous" disabled={currentQuestion === 0} onClick={handlePreviousQuestion}
              className="mr-1 p-button-sm" />
            <Button label="Save & Next" disabled={currentQuestion === question.length - 1} onClick={handleNextQuestion}
              className="p-button-sm mr-1" />
          </div>
        </div>
      </div >
      <div className='mt-2 lg:mt-4 lg:flex lg:ml-8 mr-1 ml-1 border-1'>
        <div className='flex ml-2'>
          <span style={{ width: "1rem", height: "1rem", borderRadius: "50%" }} className="mt-3 bg-red-500"></span>
          <p className='mr-5 ml-1'>Current question</p>
        </div>

        <div className='flex ml-2'>
          <span style={{ width: "1rem", height: "1rem", borderRadius: "50%" }} className="mt-3 bg-cyan-500"></span>
          <p className='mr-5 ml-1'>Attempted & Reviewed</p>
        </div>

        <div className='flex ml-2'>
          <span style={{ width: "1rem", height: "1rem", borderRadius: "50%" }} className="mt-3 bg-green-600"></span>
          <p className='mr-5 ml-1'>Attempted & Not Reviewed</p>
        </div>

        <div className='flex ml-2'>
          <span style={{ width: "1rem", height: "1rem", borderRadius: "50%" }} className="mt-3 bg-purple-600"></span>
          <p className='mr-5 ml-1'>Not-Attempted & Reviewed</p>
        </div>

        <div className='flex ml-2'>
          <span style={{ width: "1rem", height: "1rem", borderRadius: "50%" }} className="mt-3 bg-gray-600"></span>
          <p className='mr-5 ml-1'>Not-Attempted & Not Reviewed</p>
        </div>
      </div>
    </>
  );

}
