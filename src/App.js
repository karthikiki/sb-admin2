

import  Dashboard  from './Components/Dashboard.js';
import './App.css';
import {Route, } from 'react-router-dom';
import  Cards from './Components/dropcomp/Cards.js'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import Buttons from './Components/dropcomp/Buttons.js';
import Colors from './Components/Utilities/Colors.js'
import Borders from './Components/Utilities/Border.js'
import Animation from './Components/Utilities/Animation.js'
import Others from './Components/Utilities/Others.js'
import Blank from './Components/Pages/Blank_page.js'
import Error from './Components/Pages/404page.js'
import ForgetPassword from './Components/Pages/ForgetPassword.js'
import Charts from './Components/Charts.js'
import Tables from './Components/Tables.js'

function App() {
  return (
   <div className='App'>
    <Switch>
      <Route exact path="/" >
        <Dashboard/>
      </Route>
      {/* Components */}
      <Route exact path="/cards" >
        <Cards/>
      </Route>
      <Route exact path="/buttons" >
        <Buttons/>
      </Route>
      {/* Utilities */}
      <Route exact path="/colors" >
        <Colors/>
      </Route>
      <Route exact path="/borders" >
        <Borders/>
      </Route>
      <Route exact path="/animations" >
        <Animation/>
      </Route>
      <Route exact path="/others" >
        <Others/>
      </Route>
      {/* Pages */}
      <Route exact path="/blank" >
        <Blank/>
      </Route>
      <Route exact path="/**/**" >
        <Error/>
      </Route>
      <Route exact path="/forget_password" >
        <ForgetPassword/>
      </Route>
      <Route exact path="/charts" >
        <Charts/>
      </Route>
      <Route exact path="/tables" >
        <Tables/>
      </Route>
    </Switch> 
   </div>
 )   
}

export default App;
