import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

let root;

export const rerenderTree = () => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById('root'));
  }
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          addPost={store.addPost.bind(store)} 
          changePost={store.changePost.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderTree()

store.subscribe(rerenderTree);