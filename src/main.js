import React from 'react';
import { render as renderDom } from 'react-dom';
import App from './components/app/app';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
       <App />
        <h1>Did we make it?</h1>
      </React.Fragment>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
renderDom(<Main />, root);
