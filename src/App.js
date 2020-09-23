import React from 'react';
import './App.css';

const add = 'addition';
const reset = 'reset';
const sub = 'subtraction';

const App = (props) => {
const [count, setCount] = React.useState(0)
const [result, setResult] = React.useState(props.result);

const handleMathClick = (type, number = 1) => {
    if (type === sub) {
        setCount(count + 1);
        setResult(result - number)
    } else if (type === reset) {
        setCount(count + 1);
        setResult(props.result);
    } else if ( type === add) {
        setCount(count +1 );
        setResult(result + number)
    }
};

    return (
        <React.Fragment>
            <MathBtn
                name='-10'
                number={10}
                type={sub}
                click={handleMathClick}
            />
            <MathBtn
                name='-1'
                number={1}
                type={sub}
                click={handleMathClick}
            />
            <MathBtn
                name='Reset'
                type={reset}
                click={handleMathClick}
            />
            <MathBtn
                name='+1'
                number={1}
                type={add}
                click={handleMathClick}
            />
            <MathBtn
                name='-10'
                number={10}
                type={add}
                click={handleMathClick}
            />
            <ResultPanel
                count={count}
                result={result}
            />
        </React.Fragment>
    )
}

const MathBtn = ({click, name, number, type}) => {
    const handleClick = () => click(type, number);

    return (
        <button onClick={handleClick}>{name}</button>
    );
}

const ResultPanel = ({count, result}) => {
    const countInfo = count > 10 ? (<span>Przeciazenie procka</span>) : null;

    return (
      <>
          <h1>ilość kliknięć: {count}. {countInfo}</h1>
          <h1>wynik: {result}</h1>
      </>
    );
}

export default App;










































// import React from 'react';
// import './App.css';
//
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
//
// const App = () => {
//     const [item] = React.useState({
//         item1: 'kot',
//         item2: 'mysz',
//         item3: 'nietoperz',
//     })
//
//     const ItemList = ({name}) => (
//         <li>{name}</li>
//     )
//
//     return (
//         <>
//             <FontAwesomeIcon icon={faStar} />
//             <ul>
//                 <ItemList name={item.item1} />
//                 <ItemList name={item.item2} />
//                 <ItemList name={item.item3} />
//             </ul>
//         </>
//     )
// }
//
// export default App;