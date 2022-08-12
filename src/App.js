
import './App.css';
import NavBar from './Component/NavBar';
import Picture from './Component/Picture';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const pageSize = 10;
  return (
    <Router>
      <div className="App">
        <NavBar />
         <Switch>
         <Route path="/all"><Picture key="all" pageSize={pageSize} category='all' /></Route>
          <Route path="/nature"><Picture key="nature" pageSize={pageSize} category='nature' /></Route>
          <Route path="/nature"><Picture key="nature" pageSize={pageSize} category='nature' /></Route>
          <Route path="/sports"><Picture key="sports" pageSize={pageSize}  category='sports' /></Route>
          <Route path="/religion"><Picture key="religion" pageSize={pageSize}  category='religion' /></Route>
          <Route path="/science"><Picture key="science" pageSize={pageSize}  category='science' /></Route>
          <Route path="/education"><Picture key=" education" pageSize={pageSize}  category=' education' /></Route>
          <Route path="/health"><Picture key="health" pageSize={pageSize}  category='health'/></Route>
        </Switch> 
      </div>
    </Router> 
  );
}

export default App;

