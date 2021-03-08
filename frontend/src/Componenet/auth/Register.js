import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            errorMessage : '',
            name : '',
            phone : '',
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
         const register = {
             name : this.state.name,
             phone : this.state.phone,
             email : this.state.email,
             password : this.state.password,
             
             
             
         }
         axios.post('http://localhost:4000/users/register', register)
           .then(res =>{
               this.setState({
                   
                   name : '',
                   phone : '',
                   email : '',
                   password : '',
               
                 
               });

               this.props.history.push('/user/login');
           }).catch(err => {
            this.setState({errorMessage: 'Email already exists'});
           })

     }

    render (){
        return(
<div className="login">
<div className="container">
        <div className="row"
        style={{marginBottom: '30px'}}
        >
          <div className="main" >
          { this.state.errorMessage &&
            <div className="alert alert-danger" role="alert"> { this.state.errorMessage }</div> }
            <h3 className="">Sign up</h3>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <Link to="#" className="btn btn-lg btn-primary btn-block">Facebook</Link>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <Link to="#" className="btn btn-lg btn-info btn-block">Google</Link>
              </div>
            </div>
            <div className="login-or">
              <hr className="hr-or" />
              <span className="span-or">or</span>
            </div>

            <form method="post" onSubmit={this.hundelFormSubmit}>
              <div className="form-group">
                <label htmlFor="inputUsernameEmail">Username</label>
                <input 
                onChange={this.hundelInputChange}
                value={this.state.name}
                type="text" name="name" className="form-control"
                placeholder="Enter Username" required/>
              </div>

              <div className="form-group">
                <label htmlFor="inputUsernameEmail">Phone</label>
                <input 
                onChange={this.hundelInputChange}
                value={this.state.phone}
                type="text" name="phone" className="form-control"
                placeholder="Your Phone"required/>
              </div>

              <div className="form-group">
                <label htmlFor="inputUsernameEmail">Username or email</label>
                <input 
                onChange={this.hundelInputChange}
                value={this.state.email}
                type="email" name="email" className="form-control" 
                placeholder="thewinner@aaa.aa" required/>
              </div>

              <div className="form-group">
                {/* <Link className="pull-right" to="">Forgot password?</Link> */}
                <label htmlFor="inputPassword">Password</label>
                <input 
                onChange={this.hundelInputChange}
                value={this.state.password}
                type="password" name="password" className="form-control"
                placeholder="Enter password" required/>
              </div>

              <button type="submit" className="btn btn btn-primary">
                Register
              </button>
            </form>
          
          </div>
          
        </div>
      </div>
</div>
        )
    }
}

export default Register;