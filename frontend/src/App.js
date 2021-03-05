import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Body from './Componenet/Body'
import Question from './Componenet/Question'
import AddCategory from './Componenet/AddCategory'
import AddQuestion from './Componenet/AddQuestion'
import Login from './Componenet/auth/Login'
import register from './Componenet/auth/Register'
import ChoiceCategory from './Componenet/choiceCategory'
import Play from './Componenet/Play'



import './css/App.css';


function App() {
  return (
    <div className="">
      
      <BrowserRouter>

        
        <Switch>
        <Route path ="/" exact component={Body}/>
        <Route path ="/addcategory" exact component={AddCategory} />
        <Route path ="/question/:id" exact component={Question} />
        <Route path ="/addquestion/:id" exact component={AddQuestion} />
        <Route path ="/user/login" exact component={Login} />
        <Route path = "/user/register" exact component={register} />
        <Route path = "/user/ChoiceCategory" exact component={ChoiceCategory} />
        <Route path = "/user/Play/:id" exact component={Play} />
        </Switch>
        
        

      </BrowserRouter>


    </div>
  );
}


export default App;

