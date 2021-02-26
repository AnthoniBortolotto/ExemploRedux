import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import store from '../organisms/store';
import Pagina from '../pages/Pagina';
import Algo from '../pages/Algo';
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32'
    },
    secondary: {
      main: '#00838f'
    }
  },
});
export const themeAdd = createMuiTheme({
  palette: {
    primary: {
      main: '#283593'
    },
    secondary: {
      main: '#c62828'
    }
  },
});
ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <ThemeProvider theme={theme} >
          <Switch>
            <Route path="/" exact={true} component={Pagina}/>
            <Route path="/algo" component={Algo}/>
          </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('app')
);



