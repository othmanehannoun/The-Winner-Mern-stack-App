import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../../css/auth.css'




class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

            errorMessage : '',
            email : '',
            password : '',
          
        }
    }
 
     hundelInputChange = event => {
         this.setState({
             [event.target.name] : event.target.value
         })
     }
 
     hundelFormSubmit = event =>{
         event.preventDefault();
         const authentification = {
             email : this.state.email,
             password : this.state.password,
             
         }
          axios.post('http://localhost:4000/users/login', authentification)
           .then(res =>{
               this.setState({
                   email : '',
                   password : '',
               });
                this.props.history.push('/user/ChoiceCategory');
              

           }).catch(err => { 
            this.setState({errorMessage: 'Invalid email/password combination'});
          })
           
     }

    render(){
        return(
      
            

<div className="container">
  <div className="row">

    <div className="main" >
    
    { this.state.errorMessage &&
    <div className="alert alert-danger" role="alert"> { this.state.errorMessage } </div> }
      <h3>Please Log In, or <Link to="/user/register">Sign Up</Link></h3>
     
      <form method="post" onSubmit={this.hundelFormSubmit}>
        <div className="form-group">
          <label htmlFor="inputUsernameEmail">Username or email</label>
          <input 
          onChange={this.hundelInputChange}
          value={this.state.email}
          type="email" name="email" className="form-control" placeholder="thewinner@aaa.aa" required />
        </div>
        <div className="form-group">
          <Link className="pull-right" to="">Forgot password?</Link>
          <label htmlFor="inputPassword">Password</label>
          <input 
          onChange={this.hundelInputChange}
          value={this.state.password}
          type="password" name ="password" className="form-control" placeholder="Your Password" required/>
        </div>
       
        <button type="submit" className="btn btn btn-primary">
          Log In
        </button>
      </form>
    
    </div>
    
  </div>
</div>
            

        )
    }
}


export default Login ;