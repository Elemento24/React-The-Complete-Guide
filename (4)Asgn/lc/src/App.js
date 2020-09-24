import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    word: ''
  }

  inputChangedHandler = (event) => {
    this.setState({ word: event.target.value });
  }

  charDeleteHandler = charIndex => {
    const word = this.state.word.split('');
    word.splice(charIndex, 1);
    const updatedWord = word.join('');
    this.setState({ word: updatedWord });
  }

  render() {
    const charList = this.state.word.split('').map((ch, ind) => {
      return <Char text={ch} key={ind} clicked={() => this.charDeleteHandler(ind)} />
    });

    return (
      <div className="App">
        <input type="text" value={this.state.word} onChange={this.inputChangedHandler} />
        <p>{this.state.word.length}</p>
        <Validation lenText={this.state.word.length} />
        {charList}
      </div>
    );
  }
}

export default App;
