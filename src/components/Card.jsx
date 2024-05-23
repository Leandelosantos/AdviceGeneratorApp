import svg from "../images/pattern-divider-desktop.svg";
import svgMobile from "../images/pattern-divider-mobile.svg";
import dado from "../images/icon-dice.svg";
import { useState } from "react";
//import { getQuote } from '../helpers/getQuote'

export const Card = () => {
  const [newQuote, setNewQuote] = useState({});

  // const getNewQuote = async() => {
  //     const newQuote = await getQuote();
  //     setNewQuote(newQuote)
  //     return newQuote
  // }

  const frases = [
    "Disculpen chicos, justo windows decidio meterme un update.",
    "Hoy el wifi esta terrible, estoy colgada del celu con datos.",
    "Pedi un uber, se retraso y aca estamos...disculpen chicos.",
    "Estan trabajando en casa, asi que me vine al cafe de la esquina.",
    "Perdon chicos, estoy volviendo a casa, vayan haciendo el ejercicio 78",
    "Esperen que me paso a la pc que estoy desde el celu con datos",
    "Disculpen el desorden, me estan cambiando un caño",
  ];

  const getNewQuote = () => {
    const randomNumber = Math.floor(Math.random() * 7);
    const newQuote = frases[randomNumber];
    console.log(newQuote);
    setNewQuote(newQuote);
    return newQuote;
  };

  const onQuote = () => {
    getNewQuote();
  };

  //const { id, advice } = newQuote;

  return (
    <div className="cardContainer">
      {/* <h6>ADVICEEEEEEEEEE #{id} </h6>
      <p>"{advice}"</p> */}
      <h6>Rita's Says</h6>
      <p>{newQuote}</p>
      <img
        className="img"
        srcSet={`${svgMobile} 295w, ${svg} 444`}
        sizes="(max-width: 375px) 295px, 
                    (min-width: 376px) 444px, 800w"
        src={svg}
        alt="foto"
      />
      <div className="dadoContainer">
        <img className="dado" src={dado} alt="dado" onClick={onQuote} />
      </div>
    </div>
  );
};
