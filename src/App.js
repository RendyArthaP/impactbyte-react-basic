import './App.css';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Excercise18 from './pertemuan-15/excercise18/Excercise18'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          React-Impactbyte
        </Link>

        <div className="list">
          <Link to="/excercise18">
            Excercise18
          </Link>
        </div>
        
        <Route path="/excercise18" component={Excercise18}/>
      </div>
    </Router>
  );
}

export default App;
