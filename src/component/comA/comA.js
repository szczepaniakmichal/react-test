import * as React from 'react'


import './comA.css';
import ComB from '../comB/comB'
import ComC from '../comC/comC'
import ComD from '../comD/comD'
import ComE from '../comE/comE'
import ComF from './../comF/comF';


export default class App extends React.Component {
  render(){
    return(
      <div>
        <p>comA</p>
        <ComB title ='state na przykładize licznika'/>
        <ComC title = 'event - interakcja z komponentami'/>
        <ComD title = 'state na przykładize formularza'/>
        <ComE title = 'cykl życia komponentu - zegar'/>
        <ComF title = 'static list contact'/>
      </div>
    )
  }
}

