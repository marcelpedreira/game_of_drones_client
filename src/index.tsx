import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { history, store } from './createStore';
import theme from './themes/theme1';
import HomeContainer from './modules/Home/containers/HomeContainer';
import RoundContainer from './modules/Round/containers/RoundContainer';
import ResultContainer from './modules/Result/containers/ResultContainer';
import RecordsContainer from './modules/Records/containers/RecordsContainer';
import client from './client';
import GameContextProvider from './GameContext';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <CssBaseline />
          <App>
            <GameContextProvider>
              <Route exact path="/" component={HomeContainer} />
              <Route
                path="/round/:round/player/:player"
                component={RoundContainer}
              />
              <Route path="/result" component={ResultContainer} />
              <Route path="/records" component={RecordsContainer} />
            </GameContextProvider>
          </App>
        </ApolloProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
