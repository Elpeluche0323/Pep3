import React,{ useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { CodeBlock, dracula } from "react-code-blocks";
import Form from "react-bootstrap/Form";
import add_to_puntaje from "../services/Puntaje"

export default function PreguntaComponent({ id, pregunta, codigo, dificultad, respuesta }) {
  const initialState = {
    answer: "",
  };

  const [puntaje, setPuntaje] = useState(
    localStorage.getItem("puntaje") ? localStorage.getItem("puntaje") : 0
  );

  const [trueAnswer, setTrueAnswer] = useState(-1);

  const [input, setInput] = useState(initialState);

  const changeAnswerHandler = (event) => {
    setInput({ ...input, answer: event.target.value });
  };

  const compararRespuestas = (e) => {
    e.preventDefault();
    if (input.answer == respuesta) {
      setPuntaje(add_to_puntaje(7));
      setTrueAnswer(1);
    } else {
      setPuntaje(add_to_puntaje(1));
      setTrueAnswer(0);
    }

    if (localStorage.getItem("restantes") == 0) {
      window.location.href = "/resultados";
    }
  };

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <h3 className="text-pregunta">
          <b>
            Dificultad: {dificultad}
            </b>
            <b>
            Pregunta {id}: {pregunta}
          </b>
        </h3>
        <div className="code-box">
          <CodeBlock
            text={codigo}
            language="python"
            theme={dracula}
            codeBlock={{ lineNumbers: true }}
            align="left"
          />
        </div>
        <div class="respuesta">
          <Form>
            <Form.Group
              className="mb-3"
              controlId="respuesta"
              value={input.answer}
              onChange={changeAnswerHandler}
            >
              <Form.Label>
                <h3>Ingrese su respuesta aquí: </h3>
              </Form.Label>
              <br></br>
              <Form.Control type="respuesta" placeholder="" />
            </Form.Group>
          </Form>
          {trueAnswer == 1 ? (
            <h3>¡Respuesta Correcta. Obtienes 7 puntos!</h3>
          ) : trueAnswer == 0 ? (
            <h3>Respuesta Incorrecta. Obtienes 1 punto.</h3>
          ) : (
            <button varian="primary" onClick={compararRespuestas}>
              Verificar Respuesta
            </button>
          )}
        </div>
        <hr></hr>
      </HomeStyle>
    </div>
    
  );
  
}

const GlobalStyle = createGlobalStyle`
body { 
    background-color: #87DF79;
}
`;

const HomeStyle = styled.nav`
.text-pregunta {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.code-box {
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 20px;
}
.respuesta {
    justify-content: center;
    padding-bottom: 50px;
}

button {
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #7dcea0;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
button:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
}
`;