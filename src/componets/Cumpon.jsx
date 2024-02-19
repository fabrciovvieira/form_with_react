import React, { useState } from 'react'
import "./Cumpon.css"
import { FaCopy } from 'react-icons/fa';


export const Cumpon = ({ data }) => {

    const [copy, setCopy] = useState(false)

    function handleClick() {

        const cuponElement = document.getElementById("cupom_code");

        if (cuponElement) {
        const textToCopy = cuponElement.innerText;

        navigator.clipboard.writeText(textToCopy)
        .then(() => {
            setCopy(true);
            setTimeout(() => {
                setCopy(false); 
            }, 1500);
        })
        .catch((error) => {
            console.error("Erro ao copiar o cupom:", error);
        });
        }
    }
    

    
  return (
    <div>
        <p>Muito obrigado por sua avaliação, ficamos grato por sua preferência, abaixo segue seu cupom de <span>10%</span> de desconto em todo o site.</p>
        <h3>SEU CUPOM É:</h3>
        <h1 id='cupom_code'>{data.cupom}</h1>
        <button id="copy-btn" onClick={handleClick}>
            <FaCopy/>
            <span>{copy ? "Cupom Copiado" : "Copiar Cupom"}</span>
        </button>
    </div>
  )
}

