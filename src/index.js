import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const postsData = [
  { id: 1, text: 'Hello, world!', like: '45' },
  { id: 2, text: 'How are you?', like: '55' },
  { id: 3, text: 'I am fine, thank you!', like: '115' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={postsData} />
    </BrowserRouter>
  </React.StrictMode>
);
