import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const App = () => {
    const [item] = React.useState({
        item1: 'kot',
        item2: 'mysz',
        item3: 'nietoperz',
    })

    const ItemList = ({name}) => (
        <li>{name}</li>
    )

    return (
        <>
            <FontAwesomeIcon icon={faStar} />
            <ul>
                <ItemList name={item.item1} />
                <ItemList name={item.item2} />
                <ItemList name={item.item3} />
            </ul>
        </>
    )
}

export default App;





// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'

// function App() {
// return (
//   <div className="App">
//       <h1>Witaj w aplikacji testowej</h1>
//
//       <FontAwesomeIcon icon={faStar} />
//
//
//
//   </div>
// );
// }