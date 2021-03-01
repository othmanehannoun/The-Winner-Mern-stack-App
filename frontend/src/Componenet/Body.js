
import React, { Component } from 'react';
import Categorie from './Category'
import Menu from './Menu'



class Body extends Component{
    render(){
        return(

            <div>
                <Menu />
                <div className="mainContent">
               
               <nav>
               </nav>

           <div className="boxContent">
               <div className="firstRow">
                   
                   <Categorie/>
               </div>
           </div>
       </div>
            </div>

        )
    }
}


export default Body ;