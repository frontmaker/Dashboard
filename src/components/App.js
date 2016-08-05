import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/common/Header'



export default class App extends Component {
  render() {
    return(
      <div className="container-fluid">
          <Header />
          {this.props.children}
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };


ReactDOM.render(<App />,document.getElementById('app'));

