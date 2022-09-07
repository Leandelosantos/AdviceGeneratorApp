import svg from '../images/pattern-divider-desktop.svg'
import svgMobile from '../images/pattern-divider-mobile.svg'
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
        <img 
            className='img' 
            srcSet={`${svgMobile} 295w, ${svg} 444`}
            sizes="(max-width: 375px) 295px, 
                    (min-width: 376px) 444px, 800w" 
            src={svg} 
            alt="foto" />
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
