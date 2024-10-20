import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from './StoreContext';


let root;

export const rerenderTree = () => {
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
}

rerenderTree()

store.subscribe(rerenderTree);