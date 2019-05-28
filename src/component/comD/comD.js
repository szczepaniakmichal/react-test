import * as React from 'react'
//import { Component } from 'react';

import './comD.css';

export default class ComD extends React.Component{
  constructor(){
    super();
    this.state = { name: 'imie', surName: 'nazwisko' };
  }

  render(){
    const { title='state na przykładzie formularza' } = this.props
    return(
      <div>
        <p>ComD { title }</p>
        <input value={ this.state.name } onChange = { this.setName.bind(this) }/>
        <output> { this.state.name } </output>
        <input value={ this.state.surName } onChange = { this.setSurName.bind(this) } />
        <output> { this.state.surName } </output>
      </div>
    )
  }

  setName(e){
    this.setState({
        name: e.target.value
    })
  }

  setSurName(e){
    this.setState({
      surName: e.target.value
    })
  }
}