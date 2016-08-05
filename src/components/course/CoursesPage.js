import React from 'react';
import { Link } from 'react-router';
import Form from './form';
import ItemVal from './item';

export default class CoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      value: ''
    };

  }

  updateItems(newItem) {

    this.setState({
      messages: this.state.messages.concat(newItem)
    });

  }

  deleteItem(index) {
    var filter  = this.state.messages.filter((item) => {
      return item.key != index;
    });
    

    this.setState({
      messages: filter
    });
  }

  render() {

    return(
      <div className="col-md-12">
        <Form delete={this.deleteItem.bind(this)} update={this.updateItems.bind(this)} />
        {this.state.messages}
      </div>
    );
  }
}




















