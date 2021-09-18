import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './store/store';
import { getRovers } from './store/rovers/actions'
import { getPhotosByToday } from './store/photos/actions'
import './styles/index.scss'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk,logger))
);

getRovers()(store.dispatch,store.getState)
getPhotosByToday()(store.dispatch,store.getState)
const tooltipElement = document.getElementById("tooltip");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>    
  </Provider>,
  document.getElementById('root')
);
