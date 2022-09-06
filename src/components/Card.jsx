import svg from '../images/pattern-divider-desktop.svg'
import dado from '../images/icon-dice.svg'
import { useState } from 'react'
import { getQuote } from '../helpers/getQuote'



export const Card = () => {

    const [newQuote, setNewQuote] = useState({});

    const getNewQuote = async() => {
        const newQuote = await getQuote();
        setNewQuote(newQuote)
        return newQuote
    }

    const onQuote = () => {
        getNewQuote();
    }

    const { id, advice } = newQuote


  return (
    <div className="cardContainer">
        <h6>ADVICE #{id} </h6>
        <p>"{ advice }"</p>
        <img className='img' src={svg} alt="foto" />
        <div className='dadoContainer'>
            <img 
                className='dado' 
                src={dado} 
                alt="dado"
                onClick={onQuote} />
        </div>
        
    </div>
  )
}
