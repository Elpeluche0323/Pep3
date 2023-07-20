import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'


export default function HomeComponent() {
  
  const NivelBasico = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba";
  };

  const NivelMedio = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba";
  };

  const NivelAvanzado = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba";
  };

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <h1 className="text-center">
          <b>
            {" "}
            <i>
              {" "}
              <u>¡Bienvenido a CodePy!</u>
            </i>
          </b>
        </h1>
        <h3 className="text-center">
          {" "}
          <b>
            Selecciona tu nivel de dificultad y comienza a resolver los
            desafíos.{" "}
          </b>
        </h3>
        <br></br>

        <div className="basico">
          <h2>
            <b>Modo Básico 🙂</b>
          </h2>
          <h3>
            Para principiantes en Python que quieren sumergirse en el mundo de
            la programación y aprender con desafios básicos y rápidos.
          </h3>
          <button type="button" class="btn btn-primary" onClick={NivelBasico}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="intermedio">
          <h2>
            <b>Modo Intermedio 🤔</b>
          </h2>
          <h3>
            Para aquellos que ya tienen conocimientos en Python y quieren poner
            a prueba sus habilidades con desafios de dificultad media.
          </h3>
          <button type="button" class="btn btn-primary">
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="avanzado">
          <h2>
            <b>Modo Avanzado 😈</b>
          </h2>
          <h3>
            Para aquellos expertos en Python que buscan los mayores desafios.
          </h3>
          <button type="button" class="btn btn-primary">
            Comenzar
          </button>
        </div>

        <br></br>
        <div className="nueva-pregunta">
          <h2>
            <b>Agregar un nuevo desafio 🐍 </b>
          </h2>
          <h3>
            ¿Has creado un desafio y quieres ver como otros se enfrentan a el?
            Accede a esta opción para agregar a un nuevo desafio.
          </h3>
          <button type="button" class="btn btn-primary">
            Acceder
          </button>
        </div>
        <br></br>
      </HomeStyle>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: #9E0F20;
}
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
}

.basico{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.intermedio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.avanzado{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}
`;