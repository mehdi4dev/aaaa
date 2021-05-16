import './App.css';
import {Switch,Route,BrowserRouter} from "react-router-dom"

import {useDispatch} from "react-redux"
import SignIn from "./pages/signin"
import Hero from "./component/heroCard"
import HeroComics from "./pages/heroComics"
import { useEffect } from 'react';
import {usersInfo} from "./store/actions/users"
import info from "./json/users.json"
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(usersInfo(info))
  },[])
   
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/mehdi"  component={Hero} />
        <Route path="/heroComics"    component={HeroComics} />
      </Switch>
    </BrowserRouter>
    
  );

}


export default App
