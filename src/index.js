import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost } from './redux/state';

// addPost('I\'m learning React!');

export const rerenderTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderTree()
