import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class UserMenu extends Component{
    render(){
        return(
            <div className="navigation-wrap bg-light start-header start-style">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
              <img src="/images/logo.png" className="navbar-brand" alt="logo" />
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto py-4 py-md-0">
               
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" to='/user/ChoiceCategory'>HOME</Link>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" to ="">ABOUT</Link>
                  </li>
                  
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link" to="">CONTACT US</Link>
                  </li>
                  
                  <li className="nav-item dropdown pl-4 pl-md-0 ml-0 ml-md-4">
                    <Link className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Profile 
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><Link className="dropdown-item" to="">you profil</Link></li>
                      <li><Link className="dropdown-item" to="" >logout</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>  
    </div>
        )
    }
}



export default UserMenu