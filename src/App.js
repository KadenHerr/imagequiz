import {HashRouter,Switch,Route} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
