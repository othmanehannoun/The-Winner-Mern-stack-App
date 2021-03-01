import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Menu from './Menu';



class Question extends Component{

   
        constructor(){
            super()
            this.state = {
                question : []
            }
        }
    

    componentDidMount(){
        axios.get(`http://localhost:4000/question/${this.props.match.params.id}`)
        .then(res =>{
           this.setState({
               question : res.data.question
           })
           
        }).catch(err => console.log(err));
    }


    deleteQuestion = id  =>{
        axios.delete('http://localhost:4000/deleteQuestion/' + id)
          .then(res=>{
            this.setState({
                question: this.state.question.filter(item=> item._id !== id)
            });
        }).catch(err => console.log(err))
    }


    render(){

        console.log(this.state.question)

        const Question = this.state.question
        return(
            <div>
                <Menu />
            
            <div className="mainContent">
            <nav>
            </nav>

        <div className="boxContent">
               <div>
                   <Link style={{marginBottom: '10px'}} to={`/addquestion/${this.props.match.params.id}`} className="btn btn-info" >Add Question</Link>
                </div>
            <div className="firstRow">
               
            <table className="table" style={{background: 'floralwhite'}}> 
                <thead>
                  <tr>
                    <th scope="col">_id</th>
                    <th scope="col">Question</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

               { 
                    Question.map((question) => {
                        return (
                        <tbody key={question._id}>
                        <tr>
                            <td>{question._id}</td>
                            <td>{question.question}</td>
                            <td>
                                <button 
                                className="btn btn-info mr-1">Modifier</button>
                            
                                <button onClick={()=>this.deleteQuestion(question._id)} 
                                className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                        
                        </tbody>
                        )
                    })
               }
              </table> 
           
            </div>
        </div>
    </div>
    </div>
                
           
             
            
        )
    }
}


export default Question ;