import React, {Component} from 'react';
import IconTest from './IconTest';
import Icon from './Icon';
import logo from './logo.svg';

//https://discuss.reactjs.org/t/svg-sprite-and-use-tag-with-react-and-webpack2/6263

class App1 extends Component {
  render() {
    return (
      <div>
      <img src={logo} className="App-logo" alt="logo" height="100" width="100"/>
      <IconTest />
      <Icon name="home" />
      <Icon name="camera" />
      <Icon name="headphones" />
      <Icon name="opportunities" />
  </div>
);
  }
}


export default App1;
