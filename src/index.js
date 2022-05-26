import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import reportWebVitals from './reportWebVitals';
import "./Components/TodoList.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
