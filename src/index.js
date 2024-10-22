import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
// import { Provider } from './StoreContext';


let root;

if (!root) {
  root = ReactDOM.createRoot(document.getElementById('root'));
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App
          // store={store}
          state={store.getState()}
          // dispatch={store.dispatch.bind(store)} 
          />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// export const rerenderTree = () => {
// }

// rerenderTree()

// store.subscribe(rerenderTree);