import preguntas from "./preguntas";
import { useState, useEffect } from "react";
import "./global.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link, Grid } from '@material-ui/core';
import Diagnostico from "./pages/Diagnostico";

const axios = require('axios');
const resps=[];
const respsV=[];


class Quiz extends React.Component {


  
  
  

  constructor(props) {
    super(props);
    this.state = {
      preguntaActual:0,
      respuestas: [],
      entrada: "",
      entradarespuesta:"",
      hiden:"inline",
      hiden2:"none",
      hidem3:"inline",
      terminardiag:false,  


      respuestasValor:[],
      entradaValor:"",
      prediccion:""
    };
  }



  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

 

  predecir= async (e)=>{

   
    await fetch('https://apidiagnostico.herokuapp.com/predecir', {
        method: "POST",        
        body: JSON.stringify({ Sintomas: [this.state.respuestas]}),
        headers: {"Content-type": "application/json; charset=UTF-8",                 
                  'Access-Control-Allow-Origin': 'https://apidiagnostico.herokuapp.com/predecir'
        }
      })
      .then(async (response) =>{
       const  datos = await response.json()
        console.log(datos)
        console.log(datos['pred'])
        console.log(datos['descr'])
       


        if(datos['pred']==="6"){
            this.setState({prediccion:"Aura tipica con migraña"})
        }
        if(datos['pred']==="2"){
            this.setState({prediccion:"migraña sin aura"})
        }
        if(datos['pred']==="1"){
            this.setState({prediccion:"migraña gemiplejica fimilar"})
        }
        if(datos['pred']==="7"){
            this.setState({prediccion:"aura tipica sin migraña"})
        }
        if(datos['pred']==="0"){
            this.setState({prediccion:"Migraña basilar"})
        }

        if(datos['pred']==="3"){
            this.setState({prediccion:"Posiblemente no tengas migraña y sea otro tipo de cefalea casual"})
        }
        
        if(datos['pred']==="4"){
            this.setState({prediccion:"migraña hemiplejica esporadica"})
        }
        swal({
            text: "Diagnostico aprox : "+this.state.prediccion,
            icon: "success",
            type: "success"
          });
    
        this.setState({terminardiag:true})
    }
        
        
        ) 
      .catch(async err => console.log(await err));

        
      this.setState({hidem3:"none"})  
    }
    updatediagnostico=async(e)=>{
        let iduser = localStorage.getItem("user_id");
        let token = localStorage.getItem("token");
     
       console.log(this.state.prediccion)
    
    const headers = {
            'content-type': 'application/json',
            'x-access-token': token
        }
      
        
        await axios.put('https://apimigraine.herokuapp.com/api/users/'+ iduser,         
        JSON.stringify({
            sintomas: this.state.respuestasValor,
            diagnostico: this.state.prediccion , 
        })
        ,
        {
            headers : {
            'content-type': 'application/json',
            'x-access-token': token
            }
        }
        
        ).then((res) => {
            
            console.log(res)
          }).catch((err) => {
            console.log(err) 
          });
        

          swal({
            text: "Diagnostico terminado",
            icon: "success",
            type: "success"
          });
          
          this.props.props.history.push('/dashboard/home');

          
    }
    
   
  render(){

    
        return (

            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '10vh' ,minwidth: "707px" }}
            >
            <div className="app " style={{color:"#fff"}}>
                <div className="lado-izquierdo " >
                <div className="numero-pregunta">
                <span> Pregunta {this.state.preguntaActual + 1} de</span> {preguntas.length}
                </div>
                <div className="titulo-pregunta">
                {preguntas[this.state.preguntaActual].titulo}
                </div>
                <div>
               
                
               
                <button    disabled={this.state.entradarespuesta ===''} style={{display:this.state.hiden}}
                    onClick={() => {
                    
                    if (this.state.preguntaActual >= preguntas.length-1) {

                        console.log(this.state.preguntaActual)
                        console.log( preguntas.length-1)
                        
                        resps.push(this.state.entrada);
                        this.setState({ respuestas:resps });  

                        respsV.push(this.state.entradaValor);
                        this.setState({respuestasValor:respsV})

                        console.log(resps)
                        console.log(this.state.respuestas)
                        console.log(this.state.respuestasValor)

                        this.setState({entrada:""})
                        this.setState({entradarespuesta:""})
                        this.setState({entradaValor:""})
                        
                        this.setState({hiden:"none"})
                        this.setState({hiden2:"inline"})
                        this.setState({terminardiag:true})

                        this.predecir()
                        
                    } else {
                        this.setState({preguntaActual:this.state.preguntaActual+1});
                        console.log(this.state.preguntaActual)
                        console.log( preguntas.length-1)
                        
                        
                        resps.push(this.state.entrada);
                        this.setState({ respuestas:resps });  

                        respsV.push(this.state.entradaValor);
                        this.setState({respuestasValor:respsV})

                        console.log(resps)
                        console.log(this.state.respuestas)
                        console.log(this.state.respuestasValor)

                        this.setState({entrada:""})
                        this.setState({entradarespuesta:""})
                        this.setState({entradaValor:""})
                    }
                    }}
                >
                    Continuar
                </button>

                 <br></br>
               
                </div>
            </div>
            <div className="lado-derecho"   >

                {preguntas[this.state.preguntaActual].respuesta.map((respuestas)=>{
                {
                    //console.log(preguntas[this.state.preguntaActual].titulo)
                   // console.log(preguntas[this.state.preguntaActual].tipopregunta)
                    //console.log(respuestas)
                    if(preguntas[this.state.preguntaActual].tipopregunta==="input"){
                    //console.log(this.state.entrada);
                    return  <TextField
                    key={preguntas[this.state.preguntaActual].id}
                    id="standard-number"
                    type="number"
                    autoComplete="off"
                    name="entrada"
                    value={this.state.entrada}
                    onChange={(e)=>{
                        this.onChange(e);
                        this.setState({entradarespuesta:e.target.value})
                        this.setState( {entradaValor:e.target.value } ); 
                    }}
                    placeholder="respuesta"
                    required
                    color="secondary" 
                    focused
                    style={{
                        borderRadius: 4,
                        position: 'relative',
                        backgroundColor: '#fcfcfb' ,
                        border: '1px solid',
                        fontSize: 15,
                        width: 'auto',
                        padding: '10px 10px',
                        }}
                  
                  />
                    
                    }

                    if(preguntas[this.state.preguntaActual].tipopregunta==="button" ){
                    return <button 
                    name={respuestas.textoRespuesta}
                    value={respuestas.value} 
                    onClick={(event)=>{this.setState( {entrada: event.target.value} ); 
                                        this.setState( {entradaValor: event.target.name} ); 
                                        this.setState( {entradarespuesta: respuestas.textoRespuesta} ); 
                                   // console.log(respuestas.value)
                                }}>{respuestas.textoRespuesta}</button>
                    }
                    
                }
                
                })}        
            
                <div className="">
                    <p1>Respuesta: </p1>
                    <span>{ this.state.entradarespuesta}</span>      
                </div>    

            </div>
           
           
            </div>

            <button  disabled={this.state.prediccion===''}
                       // style={{display:this.state.hiden2}}
                    onClick={() => { 
                      
                       
                        this.updatediagnostico()
                           
                    }}
                >
                    Terminar Diagnostico
                </button>   
          
            </Grid>
        )
    }
}

export default Quiz;
