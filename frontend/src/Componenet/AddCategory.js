import React, { Component } from 'react'
import axios from "axios";
import Menu from './Menu';


class AddCategory extends Component{

   constructor(props){
       super(props);
       this.state = {
           title : '',
           body : '',
         
       }
   }

    hundelInputChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    hundelFormSubmit = event =>{
        event.preventDefault();
        const category = {
            title : this.state.title,
            body : this.state.body,
            
        }
        axios.post('http://localhost:4000/addcategory', category)
          .then(res =>{
              this.setState({
                  title : '',
                  body : '',
                
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
                                <div className="card-body">
                                <form method="post" onSubmit={this.hundelFormSubmit}> 
                                   <div className="form-group">
                                     <label htmlFor="exampleInputEmail1">Titre</label>
                                     <input 
                                     onChange={this.hundelInputChange}
                                     value={this.state.title}
                                     type="text" name="title" className="form-control" placeholder="Titre" required/>
                                 </div>

                                   <div className="form-group">
                                     <label htmlFor="exampleInputPassword1">Description</label>
                                     <textarea 
                                     onChange={this.hundelInputChange}
                                     value={this.state.body}
                                     type="text" name="body" className="form-control" placeholder="Description" required>
                                     </textarea>
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
            </div>
                
              
        )
    }
}


export default AddCategory ;