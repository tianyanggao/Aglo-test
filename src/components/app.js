import React, { Component } from 'react';
import AddImage from './addImage';
import '../../style/style.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {showImg:false}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      showImg: !prevState.showImg
    }));
  }
  render() {
    return (
      <div>

      <AddImage showImages={this.state.showImg}/>
      <div className="showhelp">
      <button onClick={this.handleClick}>
      {this.state.showImg ? 'Hide' : 'Show Help'}
      </button>
      </div>
      </div>
    );
  }
}
