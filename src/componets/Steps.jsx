import "./Steps.css"
import  {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import { FiSend } from "react-icons/fi"
import { FaCopy, FaStar } from 'react-icons/fa';


const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
        <div className="step active">
            <AiOutlineUser/>
            <p>Identificação</p>
        </div>
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            <AiOutlineStar/>
            <p>Avaliação</p>
        </div>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
            <FiSend/>
            <p>Envio</p>
        </div>
        <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
            <FaStar/>
            <p>Cupom</p>
        </div>
    </div>
  )
}

export default Steps