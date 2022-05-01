import React from 'react';
import './Card.css';
import { ReactComponent as ShuffleIcon} from './ShuffleIcon.svg';

const Card = (props) => {

    const [quote, setQuote] = React.useState('Click the button for random wisdom');
    const [number, setNumber] = React.useState('Advice generator');

    function handleShuffle(e) {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then((data) => {
            console.log(data.slip);
            let quote = data.slip.advice
            let id = data.slip.id;
            setQuote(quote);
            setNumber(`Advice #${id}`);
        });
    }


    return (
        <div className="card">
            <span className="card__number">{number}</span>
            <p className="card__quote">{quote}</p>
            <button className="card__button" onClick={handleShuffle}><ShuffleIcon /></button>
        </div>
    )
}

export default Card;