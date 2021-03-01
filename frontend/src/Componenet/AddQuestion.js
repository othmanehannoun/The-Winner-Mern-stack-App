import React, { Component } from 'react'
import axios from "axios";
import Menu from './Menu';


class AddQuestion extends Component{

   constructor(props){
       super(props);
       this.state = {
           question : '',
           categoryParent: ''
       }
   }

    hundelInputChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    hundelFormSubmit = event =>{
        event.preventDefault();
        const addquestion = {
            question : this.state.question,
            categoryParent: this.props.match.params.id
        }
        axios.post(`http://localhost:4000/addquestion/${this.props.match.params.id}`, addquestion)
          .then(res =>{
              this.setState({
                  question : '',
                  categoryParent : ''
              });
              this.props.history.push('/');
          }).catch(err => {console.log(err)})
    }

    render(){
        return(
           

               <div>
                   <Menu />
                    <div className="mainContent">
                <nav>
                </nav>

                <div className="boxContent">
                <div className="firstRow">
                <div className="container">
                <div className="row my-4">
                    <div className="col-md-6 mx-auto">
                        <div className="card bg-light">
                            <div className="card-header">
                            ADD QUESTION
                            </div>
                            <div className="card-body">
                                <form method="post" onSubmit={this.hundelFormSubmit}> 
                                   <div className="form-group">
                                     <label htmlFor="exampleInputEmail1">Question</label>
                                     <input 
                                     onChange={this.hundelInputChange}
                                     value={this.state.question}
                                     type="text" name="question" className="form-control" placeholder="" required/>
                                 </div>

                                   <div className="form-group">
                                     <label htmlFor="exampleInputPassword1">ID CategoryParant</label>
                                     <input
                                     onChange={this.hundelInputChange}
                                     value={this.props.match.params.id}
                                     type="text" name="categoryParent" className="form-control" placeholder="id" required />
                                   </div>
                           
                                  <button type="submit" className="btn btn-primary"> Submit</button>
                                 </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
   </div>
               </div>

                
              
        )
    }
}


export default AddQuestion ;