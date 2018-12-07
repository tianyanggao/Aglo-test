import React, { Component } from 'react';
// import Logo from '../data/1.png';
// var Logo = require('../data/1.png');
export default class AddImage extends Component {

shows(){
   if(!this.props.showImages){
     return null;
   }
 return (
    <div className="show-images">
      <img src="../data/1.png" alt="Products Images"/>
    </div>
  );
 }

  render() {
    return (
      <div>
      {this.shows()}
      </div>
    );
  }

}
