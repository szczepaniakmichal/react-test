import * as React from 'react'
//import { Component } from 'react';

import './comB.css';
//import ComC from '../comC/comC'

export default class ComB extends React.Component {
  constructor(){
    super();
    this.state = { counter: 0, sumClick: 0, doubleClick: 0 };
  }

  render(){
    const { title } = this.props;
  
    return(
      <div>
        <p>comB { title } </p>
          <div>
            <button onClick={ this.increment.bind(this) } onDoubleClick={ this.twoClick.bind(this) } > + </button>       
            <button onClick={ this.decrement.bind(this) } onDoubleClick={ this.twoClick.bind(this) }> - </button>
          </div>
          <div>
          <div>
            <output> Licznik { this.state.counter }</output>
          </div>
          <div>
            <output> Kliknięcia wszystkie: { this.state.sumClick }</output>
          </div>
          <div>
            <output> Kliknięcia podwójne: { this.state.doubleClick } </output>
          </div>
          </div>  
      </div>
    )
  }

  increment(){
    this.setState(prevState => { 
        return{
          counter: prevState.counter + 1,
          sumClick: prevState.sumClick + 1
        }
     });
  }

  decrement(){
    this.setState(prevState => {
        return{
          counter: prevState.counter - 1,
          sumClick: prevState.sumClick + 1
        } 
    });
  }

  twoClick(){
    this.setState(prevState => {
      return {
        doubleClick: prevState.doubleClick + 1
      }
    });
  } 
}





