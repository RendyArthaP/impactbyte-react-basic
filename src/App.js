import './App.css';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Soal1 from './pertemuan-15/excercise18/soal1/Soal1'
import Soal2 from './pertemuan-15/excercise18/soal2/Soal2';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          React-Impactbyte
        </Link>

        <div className="list">
          <ul>
            <li>  
              <Link to="/Soal1">
              Soal1 / Excercise18
              </Link>
            </li>
            <li>
              <Link to="/Soal2">
                Soal2 / Excercise18
              </Link>
            </li>
          </ul>
        </div>

        <Route path="/Soal1" component={Soal1}/>
        <Route path="/Soal2" component={Soal2}/>
      </div>
    </Router>
  );
}

export default App;
