import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


class Choice extends Component{

    state = {
        categorys : []
    }


componentDidMount(){
    this.getCategory();
}

getCategory = () => {
     axios.get('http://localhost:4000/category')
     .then(res =>{
        this.setState({
            categorys : res.data.categorys
        })
        
     }).catch(err => console.log(err));
}





render(){

    console.log(this.state.categorys)
    const Categorys = this.state.categorys
    return(
        <div className="container">
        <div className="row mt-5">
           

          { 
                Categorys.map((Category, key) => {
                    return (
                        
                        <div key={key} className="col-12 col-sm-6 col-md-4 image-grid-item">
                            
                        
                        <div className="image-grid-cover">
                            <img src={`/images/${Category.img}`} alt="" />
                            <Link to={`/user/Play/${Category._id}`} className="image-grid-clickbox"></Link>
                            <Link to={`/user/Play/${Category._id}`} className="link">{Category.title}</Link>

                        </div>
                    </div>
                    )
                })
           }
           
            
      </div>
        </div>

                
    )
}
}



export default Choice