import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Menu extends Component{
    render(){
        return(
      
            <div className="sideBarre">
                  <div className="sideBarre__logo">
                        <h1>winner</h1>
                  </div>
                  <div className="sideBarre__menu">
                        <ul>
                            <li><Link className="navbar-brand" to="/">Categorie</Link></li>
                            <li><Link className="navbar-brand" to="/addnote">Profile</Link></li>
                            <li><Link className="navbar-brand" to="/">Logout</Link></li>
                            

                        </ul>
                  </div>
            </div>

        )
    }
}


export default Menu ;