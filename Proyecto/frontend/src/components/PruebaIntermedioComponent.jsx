import React, { Component } from "react";
import PreguntaComponent from "./PreguntaComponent";
import styled from "styled-components";
import NavbarComponent4 from "./NavbarComponent4";
import PreguntaService from "../services/PreguntaService";
import FooterComponent from "./FooterComponent";

class PruebaIntermedioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount(){
    PreguntaService.getPreguntaIntermedio().then((res) => {
        this.setState({ datas: res.data});
    });
}

  render() {
    return (
      <HomeStyle>
        <NavbarComponent4/>

        <div className="text-center">
          <h1 className="add">
            <b>
              <u>Prueba: Modo Intermedio </u>
            </b>
          </h1>
          {this.state.datas.map((datas) => (
            <PreguntaComponent
              id={datas.id}
              pregunta={datas.pregunta}
              codigo={datas.codigo}
              dificultad={datas.dificultad}
              respuesta={datas.respuesta}
              
            ></PreguntaComponent>
          ))}
          <FooterComponent></FooterComponent>
        </div>
      </HomeStyle>
    );
  }
}

export default PruebaIntermedioComponent;


const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
}
.add{
    padding-top: 10px;
    padding-bottom: 30px;

}

`