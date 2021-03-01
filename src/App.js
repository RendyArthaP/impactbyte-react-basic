import './App.css';
import { BrowserRouter as Router,Route, Link, Switch } from "react-router-dom";
import Soal1 from './pertemuan-15/excercise18/soal1/Soal1'
import Soal2 from './pertemuan-15/excercise18/soal2/Soal2';
import BelajarUseEffect from './pertemuan-19/UseEffect/BelajarUseEffect';
import User from './pertemuan-19/User/User';

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
            <li>
              <Link to="/belajaruseeffect">
                Belajar Use Effect
              </Link>
            </li>
            <li>
              <Link to="/user">
                User
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/Soal1" component={Soal1}/>
          <Route path="/Soal2" component={Soal2}/>
          <Route path="/belajaruseeffect" component={BelajarUseEffect}/>
          <Route path="/user" component={User}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
