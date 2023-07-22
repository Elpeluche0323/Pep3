import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import NavbarComponent2 from "./NavbarComponent2";


export default function HomeComponent() {
  
  const NivelBasico = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba/basico";
  };

  const NivelMedio = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba/intermedio";
  };

  const NivelAvanzado = () => {
    localStorage.setItem("puntaje", 0);
    localStorage.setItem("restantes", 4);
    window.location.href = "/prueba/avanzado";
  };

  const NuevaPregunta = () => {
    window.location.href = "/nueva-pregunta"
  }

  return (
    <div>
      <NavbarComponent2> </NavbarComponent2>
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
            Codepy es una pagina web que permitira a los usuarios practicar y
            mejorar sus habilidades en Python.{" "}
            </b>
            <b>
            Para comenzar selecciona un nivel de dificultad y comienza a resolver los
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
          <button variant="button" class="btn btn-primary" onClick={NivelBasico}>
            Comenzar
          </button>
        </div>
        <br></br>
        <div className="intermedio">
          <h2>
            <b>Modo Intermedio 😐</b>
          </h2>
          <h3>
            Para aquellos que ya tienen conocimientos en Python y quieren poner
            a prueba sus habilidades con desafios de dificultad media.
          </h3>
          <button type="button" class="btn btn-primary" onClick={NivelMedio}>
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
          <button type="button" class="btn btn-primary" onClick={NivelAvanzado}>
            Comenzar
          </button>
        </div>

        <br></br>
        <div className="nueva-pregunta">
          <h2>
            <b>Agregar un nuevo desafio 🐍🤔 </b>
          </h2>
          <h3>
            ¿Has creado un desafio y quieres ver como otros se enfrentan a el?
            Accede a esta opción para agregar a un nuevo desafio.
          </h3>
          <button type="button" class="btn btn-primary" onClick={NuevaPregunta}>
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
    background-color: #87DF79;
}
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff11;
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