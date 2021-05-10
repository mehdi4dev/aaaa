import './App.css';
import {Switch,Route,BrowserRouter} from "react-router-dom"
import {signin,favorite} from "./pages"
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={signin} />
      <Route path="/favorite" exact component={favorite} />
    </Switch>
    </BrowserRouter>
  );

}

export default App;
