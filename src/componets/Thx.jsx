import React from 'react'
import './Thx.css'
import{ BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill } from 'react-icons/bs'

const Thx = ({ data }) => {

  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_Satisfied: <BsFillEmojiHeartEyesFill/>
  }

  return (
    <div className='thx-container'>
      <h2>Falta pouco...</h2>
      <p>A sua opnião é muito importante pra gente! Em breve você irá receber um cupom de 10% de desconto para sua próxima compra</p>
      <p>Para receber seu cumpom clique no botão para enviar sua avaliação</p>
      <h3>Aqui está o resumo da sua avaliação, {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação do produto:</span>
       {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span> {data.comment}
        
      </p>
    </div>
  )
}

export default Thx