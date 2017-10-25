import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App constructor');
    this.state = {
      list: ['initialState']
    };
  }
  componentWillMount() {
    console.log('App componentWillMount');
    // basically useless life_cycle hook. Should not do axios calls or set state,
    // state should be set in constructor. Has no access to DOM, as component doesn't
    // exist yet. Best used for configuring App, but use sparingly.
  }
  componentDidMount() {
    // Component has mounted, we now have access to DOM and child elements, good time
    // for axios requests and any setup that requires the component to exist for.
    console.log('App componentDidMount');

    // below is just to show off componentWillReceiveProps for child.
    setTimeout(() => {
      this.setState({
        list: [...this.state.list, 'updated state', 'shouldUpdate?']
      });
    }, 2000);

    setTimeout(() => {
      this.setState({
        list: []
      });
    }, 5000);
  }
  render() {
    return (
      <div className="App">
        {this.state.list.length > 0 ? <List list={this.state.list} /> : null}
      </div>
    );
  }
}

export default App;
