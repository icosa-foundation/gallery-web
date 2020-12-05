import React from 'react';
import './App.css';
import { Routes } from './routes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

function App() {
  return (
      <div className="App">
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <Router>
            {
              Routes.map((route, key) => {
                return <Route key={key} path={route.path} exact={route.exact} children={route.component}></Route>
              })
            }
            </Router>
          </ThemeProvider>
        </RecoilRoot>
    </div>
  );
}

export default App;
