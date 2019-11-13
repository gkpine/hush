import React from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import AppBar from './components/AppBar'

function App() {
  return (
    <div className="App">
      <span><AppBar /></span>
      <span><ReactQuill className="editor" theme="bubble" /></span>
    </div>
  );
}

export default App;
