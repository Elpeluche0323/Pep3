import React, { Component } from "react";
import PreguntaComponent from "./PreguntaComponent";
import styled from "styled-components";
import NavbarComponent2 from "./NavbarComponent2";
import PruebaService from "../services/PruebaService";

class PruebaBasicoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }
/** 
  componentDidMount() {
    fetch("http://localhost:8080/prueba/basico")
      .then((response) => response.json())
      .then((data) => this.setState({ datas: data }));
  }
**/
  componentDidMount() {
    PruebaService.getPruebaBasico().then((res) => {
      this.setState({ datas: res.data});
  });
  }

  render() {
    return (
      <HomeStyle>
        <NavbarComponent2/>

        <div className="text-center">
          <h1 className="add">
            <b>
              <u>Prueba: Modo Básico </u>
            </b>
          </h1>
          {this.state.datas.map((datas) => (
            <PreguntaComponent
              id={datas.id}
              pregunta={datas.pregunta}
              codigo={datas.codigo}
              respuesta={datas.respuesta}
              
            ></PreguntaComponent>
          ))}
        </div>
      </HomeStyle>
    );
  }
}

export default PruebaBasicoComponent;


const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
}
.add{
    padding-top: 10px;
    padding-bottom: 30px;

}

`