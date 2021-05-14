import './App.css';
import {Switch,Route,BrowserRouter} from "react-router-dom"
import {userInfo} from "./store/actions/users"
import info from "./json/users.json"
import {useDispatch} from "react-redux"
import SignIn from "./pages/signin"
import Favorite from "./pages/favoriteheroes"
import { useEffect } from 'react';
function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(userInfo(info))
  },[])
   
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/favorite"    component={Favorite} />
      </Switch>
    </BrowserRouter>
    
  );

}


export default App
