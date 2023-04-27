import React from 'react';
import ReactDOM from 'react-dom';
import socket from './socket';
import Main from './components/Main';
import './css/index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { client: socket() };
  }

  render() {
    return (
      <div className="root">
        <div className="app-container">
          <Main client={this.state.client} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));