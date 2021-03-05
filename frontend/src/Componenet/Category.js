import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';



class Note extends Component{

   
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



    deleteCategory = id  =>{
        axios.delete('http://localhost:4000/deletecategory/' + id)
          .then(res=>{
            this.setState({
                categorys: this.state.categorys.filter(item=> item._id !== id)
            });
            this.props.history.push('/');
        }).catch(err => console.log(err))
    }


    render(){

        console.log(this.state.categorys)
        const Categorys = this.state.categorys
        return(
            <div>
                <Link style={{marginBottom: '10px'}}className="btn btn-info" to="/addcategory">Add Category</Link>
            <div class="row row-cols-1 row-cols-md-3">
               

{ 
                    Categorys.map((Category) => {
                        return (
                            
                            <div className="col mb-4">
                                
                            <div className="card h-100">
                                <img src={`/images/${Category.img}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                <h2 className="card-title">{Category.title}</h2>
                                <p className="card-text">{Category.body}</p>
                                </div>
                                <div className="card-footer">
                                    <Link className="btn btn-info mr-1" to={`/question/${Category._id}`}>les Question</Link>

                                    <button onClick={()=>this.deleteCategory(Category._id)} 
                                className="btn btn-danger">Supprimer</button>
                                </div>
                            </div>
                        </div>
                        )
                    })
               }
               
                
          </div>
            </div>
             /* <table className="table">
                <thead>
                  <tr>
                    <th scope="col">_id</th>
                    <th scope="col">Titre</th>
                    <th scope="col">description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

               { 
                    notes.map((note) => {
                        return (
                        <tbody key={note._id}>
                        <tr>
                            <td>{note._id}</td>
                            <td>{note.title}</td>
                            <td>{note.body}</td>
                            <td>
                                <button onClick={()=>this.updatenote(note._id)} 
                                className="btn btn-info" style={{margin:'10px'}}>Modifier</button>
                            
                                <button onClick={()=>this.deletnote(note._id)} 
                                className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                        
                        </tbody>
                        )
                    })
               }
              </table> */
             
            
        )
    }
}


export default Note ;