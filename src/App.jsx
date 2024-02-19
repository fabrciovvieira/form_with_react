import './App.css'

// Componentes
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './componets/UserForm'
import ReviewForm from './componets/ReviewForm'
import Thx from './componets/Thx'
import Steps from './componets/Steps'
import { Cumpon } from './componets/Cumpon'

// Hooks
import { userForm } from './hooks/userForm'
import { useState } from 'react'



let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
const cupomCode = code + "10"

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
  cupom: cupomCode,

}

function App() {

  const [data, setData] = useState(formTemplate)

  const updateFieldHandle = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandle={updateFieldHandle}/>,
    <ReviewForm data={data} updateFieldHandle={updateFieldHandle}/>,
    <Thx data={data}/>,
    <Cumpon data={data}/>,
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep, send} = userForm(formComponents)

  return (
    <>
      
        {!isLastStep ? (
          <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>Ficamos felizes com a sua compra! Avalie o produto no formulário abaixo.</p>
          </div>
        ) : (
          <div className="header">
          <h2>Obrigado por sua avaliação</h2>
          <p>Ficamos felizes com a sua compra! Aproveite seu cupom de <span>10%</span> em todo o nosso site.</p>
          </div>
        )}

      <div className="form-container">
       <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="input-container">{currentComponent}</div>
          <div className="action">
          {!isFirstStep && !isLastStep && (
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>
          )}
            {!isLastStep && !send && (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
            {send && (
              <button type="submit">
              <span>Enviar</span>
              <FiSend />
            </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default App
