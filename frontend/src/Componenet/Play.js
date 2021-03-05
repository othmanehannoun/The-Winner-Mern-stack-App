import React, { useState, useEffect } from 'react'
import axios from 'axios'




function Quiz({ match }) {

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

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 10);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


  return (
    
    <div className="container">

{showScore ? (
		 		<div className='score-section'>
				You scored {score} points 
			</div>
	 	) : questions.length > 0 ? (
      <>
      
      <div className="card mt-5">
        <div className="card-header">{questions[currentQuestion].question} {currentQuestion + 1}/{questions.length}</div>
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



  )
}


export default Quiz;