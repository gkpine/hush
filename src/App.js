import React from 'react';
import './App.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

function App() {
  return (
    <div className="App">
      <ReactQuill className="editor" theme="bubble"/>
    </div> 
  );
}

export default App;
