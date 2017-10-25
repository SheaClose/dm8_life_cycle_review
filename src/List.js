import React, { Component } from 'react';
//import './.css';

export default class List extends Component {
  componentWillReceiveProps(newProps) {
    // Anytime props have changed, this hook will be called, passing in the new
    // props. We can check the new props against this.props (our old props), if the
    // new props are changed in a way that we care about, we can act on it.

    // say you have a canvas element rendering a percentage of page loaded and
    // other props passed in as well. We do not want to re-render the canvas elements
    // everytime props come in, ONLY when the percentage changes.
    console.log('componentWillReceiveProps', this.props.list, newProps.list);
  }
  shouldComponentUpdate(newProps, newState) {
    // shouldComponentUpdate is really just for optimization, and at this point
    // shoule be used sparingly. When invoked, newProps and newState will be passed in
    // We can check those properties against the existing state and props and decide
    // if we care about the changes before re rendering the component.
    console.log('shouldComponentUpdate');
    // must return a true or false value, and be careful, this can lead to weird
    // behaviour if you are not careful
    return newProps.list.includes('shouldUpdate?');
  }

  componentDidUpdate(oldProps) {
    // receives old props as an arguement. This function is useful for dom
    // updates when components update. We can't do it during 'componentWillReceiveProps'
    // because the update hasn't happened yet. So, the dom elements we might want to
    // grab will not exist until componentDidMount
    console.log('componentDidUpdate', this.props.list, oldProps.list);
  }

  componentWillUnmount() {
    // No arguements received, no access to update state. This is used to clean up
    // outstanding api calls, event listeners, etc.
    console.log('componentWillUnmount');
  }
  render() {
    const list = this.props.list.map((c, i) => <li key={i}>{c}</li>);
    return <ul>{list}</ul>;
  }
}
