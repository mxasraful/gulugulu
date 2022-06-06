import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Result from './Components/Result/Result';
import Home from './Components/Home/Home';

function App() {
  const [darkPreference, setDarkPreference] = useState(false)

  const handleDarkMode = () => {
    if (darkPreference) {
      setDarkPreference(false)
    } else {
      setDarkPreference(true)
    }
  }

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkPreference(true)
    }
  }, [])
  

  return (
    <div className={darkPreference ? "App dark" : "App"}>
      <Router>
        <div className='min-h-screen dark:bg-slate-500'>
          <Switch>
            <Route path="/search/:q">
              <Header darkMode={handleDarkMode} darkPreference={darkPreference} />
              <Result />
            </Route>
            <Route exact path="/">
              <Home darkMode={handleDarkMode} darkPreference={darkPreference}  />
            </Route>
            <Route path="*">

            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
