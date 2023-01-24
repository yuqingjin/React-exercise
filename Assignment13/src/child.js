import React from 'react';
import './style.css';
import ChildContext from './childContext';

export default class Child extends React.Component {
  static contextType = ChildContext;

  constructor(props) {
    super(props);
    console.log('child component this.props', this.props);
  }

  switchLang = () => {
    if (this.props.current_pointer == 1) {
      return this.context.updateLang(1);
    } else {
      return this.context.updateLang(0);
    }
  };

  render() {
    return (
      <>
        <h2>here is the child component</h2>
        <button onClick={this.switchLang}>Switch Language</button>
      </>
    );
  }
}
