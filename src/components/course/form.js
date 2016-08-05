import React from 'react';
import ItemVal from './item';


export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  changeInp(e) {

    this.setState({
      value: e.target.value.trim()
    });
  }

  handleSubmit(e) {
      e.preventDefault();

      var index = Math.random() / 1000;

      if (this.state.value) {

        this.props.update(<ItemVal deleteItem={this.props.delete} index={index} value={this.state.value} key={index} />);

        this.setState({
          value: ''
        });

        this.refs.myInput.value = '';
        
      }
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input ref="myInput" type="text" onChange={this.changeInp.bind(this)}/>
        <input type="submit" value="Отправить"/>
      </form>
    )
  }
}



