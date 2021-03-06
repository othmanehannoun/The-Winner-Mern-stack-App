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
import './css/auth.css'


function App() {
  return (
    
      
      <BrowserRouter>
        <Switch>
            <Route path ="/admin" exact component={Body}/>
            <Route path ="/admin/addcategory" exact component={AddCategory} />
            <Route path ="/admin/question/:id" exact component={Question} />
            <Route path ="/admin/addquestion/:id" exact component={AddQuestion} />
            <Route path ="/" exact component={Login} />
            <Route path = "/user/register" exact component={register} />
            <Route path = "/user/ChoiceCategory" exact component={ChoiceCategory} />
            <Route path = "/user/Play/:id" exact component={Play} />
        </Switch>
      </BrowserRouter>


  );
}


export default App;

