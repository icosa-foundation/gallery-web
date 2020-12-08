import React from 'react';
import './App.css';
import { Routes } from './routes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

function App() {
  return (
      <div className="App">
        <RecoilRoot>
            <Router>
            {
              Routes.map((route, key) => {
                return <Route key={key} path={route.path} exact={route.exact} children={route.component}></Route>
              })
            }
            </Router>
        </RecoilRoot>
    </div>
  );
}

export default App;
