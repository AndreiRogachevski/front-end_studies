import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Form from './features/todos/Form';
import { Route, Routes } from 'react-router-dom';
import List from './features/todos/List';
import View from './features/todos/View';

const ADD_ITEM = {
  name: 'add',
};
const EDIT_ITEM = {
  name: 'edit',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Form type={ADD_ITEM} />} />
        <Route path="/:id" element={<View />} />
        <Route path="/:id/edit" element={<Form type={EDIT_ITEM} />} />
      </Routes>
    </div>
  );
}

export default App;
