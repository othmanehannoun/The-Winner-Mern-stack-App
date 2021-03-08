import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router";
import UserMenu from './UserMenu';


function Quiz({ match}) {

  const [questions, setQuestion] = useState([]);
  const {id} = match.params
  useEffect(() => {
    axios.get(`http://localhost:4000/question/${id}`)
      .then(res => {
        setQuestion(
          res.data.question
        )

      }).catch(err => console.log(err));

  })

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [falseScore, setFalseScore] = useState(0);
  let history = useHistory();

	const handleAnswerOptionClick = (isCorrect) => {
		if(isCorrect === true) {
			setScore(score + 10);
		}
    else{setFalseScore(falseScore + 1)}

    if(falseScore  === 3){
      alert(`GIME OVER : You have reached three errors`)
      history.push('/user/choiceCategory')
    }

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

	};


  return (
    
    <div className="choice">
      <UserMenu />

      <div className="container">

      

{showScore ? (
          <div class="box" >
          
          <div class="content">
              
              <h1>You scored {score} points </h1>

              
          </div>
        </div>
		 		
	 	) : questions.length > 0 ? (
      <>
      
      <div className="card"
      style={{position:'absolute', width: '70%', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>
        <div className="card-header" style={{padding: '1.75rem 2.25rem'}}>
          {questions[currentQuestion].question} 
          <div class="float-right">{currentQuestion + 1}/{questions.length}</div></div>
        <div className="card-body">
          <div className="row">
         
          {
              questions[currentQuestion].answers.map((answer, index) =>(
                <div className="col-md-6">
                  <div className="frb frb-danger margin-bottom-none">
                    <button key={index} 
                    onClick={() => handleAnswerOptionClick(answer.isCorrect)}
                    className="answer"> {answer.text} </button>
                  </div>
                </div>
              ))
            }

            
          </div>
        

        </div>
      </div> 

</>
			):'null'} 

    </div>
    </div>



  )
}


export default Quiz;