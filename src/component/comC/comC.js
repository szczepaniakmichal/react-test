import * as React from 'react'
//import { Component } from 'react';

import './comC.css';

//const klik = () => console.log('klik its work!');
const myszNa = () => console.log('onMouseOver');
const myszEnter = () => console.log('onMouseEnter');
const myszOpuszcza = () => console.log('onMouseLeave!');
const punktNa = () => console.log('onPointerEnter!');
const ruchRolka = () => console.log('onWheel!');

export default class ComC extends React.Component{
  render(){
    const { title='event - interakcja z komponentami' } = this.props;
    return(
      <div>
        <p>ComC { title } </p>
        <button onClick={ this.klik }> klik </button>
        <button onMouseOver={ myszNa }> onMouseOver </button>
        <button onMouseEnter={ myszEnter }> onMouseEnter </button>
        <button onMouseLeave={ myszOpuszcza }> onMouseLeave </button>
        <button onPointerEnter={ punktNa } onClick={ this.klik }> onPointerEnter </button>
        <button onWheel={ ruchRolka }> onWheel </button>
      </div>
    )
  }

  klik(){
    console.log("klik");
  }

}




// const ComC = ({title = 'nie przekazano atrybutu'}) => {
//     return(
//       <div>
//         <p>comC {title}</p>
//       </div>
//     )
//   };


    
//     export default ComC;


    

