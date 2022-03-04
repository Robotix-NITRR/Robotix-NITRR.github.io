import react,{useState} from "react";
import Sidebar from "./components/sideBar/SideBar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";

import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";




import GOC from "./pages/GOC/GOC";


function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <Router>
      <Topbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
      <div className="container">
        <div className="sidebar" >
        <Sidebar  />
        </div>
        
        <Switch>
        
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId" component={GOC} >
            
          </Route>
         </Switch>

      </div>
    </Router>
  );
}

export default App;