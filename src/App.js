import React, { Component } from 'react';
import './App.css';
import MusicGui from './components/MusicGui/MusicGui';

class App extends Component {
  render() {
    return (
        <>
          <div className="App">
            { /* this is a javascript comment */ }
            <MusicGui/>
          </div>
        </>
    );
  }
}

export default App;
