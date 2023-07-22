import React, { useState  } from "react";
import NavbarComponent from "./NavbarComponent";
import styled from "styled-components";
import PreguntaService from "../services/PreguntaService";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

export default function CrearPreguntaComponent(props){

    const initialState = {
        pregunta: "",
        codigo: "",
        dificultad: "",
        respuesta: ""
    };

    const [input, setInput] = useState(initialState);
    
    const changePreguntaHandler = event => {
        setInput({ ...input, pregunta: event.target.value });
        console.log(input.pregunta);
    };
    const changeCodigoHandler = event => {
        setInput({ ...input, codigo: event.target.value });
        console.log(input.codigo);
    };
    const changeDificultadHandler = event => {
        setInput({ ...input, dificultad: event.target.value });
        console.log(input.dificultad);
    };
    const changeRespuestaHandler = event => {
        setInput({ ...input, respuesta: event.target.value });
        console.log(input.respuesta);
    };

    
    const createPregunta = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea ingresar el nuevo proveedor?",
            text: "Asegurese de que los parametros esten correctos",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Proveedor ingresado correctamente", {icon: "success", timer: "3000"});
                let pregunta = {pregunta: input.pregunta, codigo: input.codigo, dificultad: input.dificultad,respuesta: input.respuesta};
                console.log(input.pregunta)
                console.log(input.codigo)
                console.log(input.dificultad)
                console.log(input.respuesta)
                console.log("pregunta => " + JSON.stringify(pregunta));
                PreguntaService.createPregunta(pregunta).then(
                    (res) => {
                    }
                  );
                }
            else{
                swal({text: "Proveedor no agregado.", icon: "error"});
            }
        });
    };

    return(
            
            <Styles>
            <div className="home">
                <NavbarComponent/>
                    <div className="mainclass">
                        <div className="form1">
                            <h1 className="text-center"><b>Agregar Pregunta</b></h1>
                            <div className="formcontainer">
                                <hr></hr>
                                <div className="container">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="pregunta" value = {input.pregunta} onChange={changePreguntaHandler}>
                                            <Form.Label>Pregunta</Form.Label>
                                            <Form.Control type="pregunta" placeholder="Pregunta que desea realizar" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="codigo" value = {input.codigo} onChange={changeCodigoHandler}>
                                            <Form.Label>Codigo del programa</Form.Label>
                                            <Form.Control type="codigo" placeholder="Codigo fuente del programa" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="dificultad" value = {input.dificultad} onChange={changeDificultadHandler}>
                                            <Form.Label>Dificultad de la pregunta</Form.Label>
                                            <Form.Control type="dificultad" placeholder="Añadir la dificultad (basico, intermedio o avanzado)" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="respuesta" value = {input.respuesta} onChange={changeRespuestaHandler}>
                                            <Form.Label>Respuesta de la pregunta</Form.Label>
                                            <Form.Control type="respuesta" placeholder="Respuesta del codigo" />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <Button className="boton" onClick={createPregunta}>Añadir pregunta</Button>
                            </div>
                        </div>
                    </div>
                
            </div>
            </Styles>
        )
    }


const Styles = styled.div`

.text-center {
    text-align: center;
    justify-content: center;
    padding-top: 8px;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 30px;
    letter-spacing: 0px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: uppercase;
}

.home{
    background-color: #006992;
    margin: 0;
    padding: 0;
}

.mainclass{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-family: Roboto, Arial, sans-serif;
    font-size: 15px;
}

.form1{
    border: 9px solid #CED0CE;
    background-color: #DADDD8;
    width: 50%;
    padding: 36px;
}

input[type=pregunta], 
input[type=codigo],
input[type=dificultad],
input[type=respuesta] {
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

Button {
    background-color: #42bfbb;
    color: white;
    padding: 14px 0;
    margin: 10px 0;
    border: none;
    cursor: grabbing;
    width: 100%;
}

Button:hover {
    opacity: 0.8;
}

.formcontainer {
    text-align: left;
    margin: 24px 100px 9px;
}

.container {
    padding: 24px 0;
    text-align:left;
}

span.psw {
    float: right;
    padding-top: 0;
    padding-right: 15px;
}
`