import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App(){

  const [ input, setInput ] = useState('');

  const agregarInput = valor =>{
    setInput(input + valor);
  };

  const calcularResultado = () =>{
    setInput(evaluate(input));
  };

  const sin = () =>{
    setInput(Math.sin(input))
  };
  const cos = () =>{
    setInput(Math.cos(input))
  };
  const tag = () =>{
    setInput(Math.tan(input))
  };
  const elevadoDos = () =>{
    setInput(Math.pow(input, 2))
  };
  const elevadpTres = () =>{
    setInput(Math.pow(input, 3))
  };
  const raizCuadrada = () =>{
    setInput(Math.pow(input, 1/2))
  };
   const raizCubica = () =>{
    setInput(Math.pow(input, 1/3))
   }

  const ln = () =>{
    setInput(Math.log(input));
  };
  const pi = () =>{
    setInput(Math.PI)
  };
  const eFuncion = ()=> { 
    setInput(Math.E)
  };

  const log = () =>{
    setInput(Math.log10(input))
  };


  const fact = () =>{
    let i, num, f;
    f=1
    num=input;
    for(i=1; i<= num; i++){
      f=f*i
    }
    i=i-1
    setInput(f)
  };

  const elevadoN = () =>{
    setInput(Math.pow(input, setInput))
  };





  return(
    <div className="App">
      <section className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <section className='fila'>
        <Boton click={agregarInput}>(</Boton>
        <Boton click={agregarInput}>)</Boton>
        <Boton click={fact}>x!</Boton>
        <Boton click={elevadoDos}>x<sup>2</sup></Boton>
        <Boton click={raizCuadrada}>√</Boton>
        <Boton click={agregarInput}><sup>n</sup>√</Boton>
      </section>
      <section className='fila'>
        <Boton click={sin}>sin</Boton>
        <Boton click={cos}>cos</Boton>
        <Boton click={tag}>tg</Boton>
        <Boton click={elevadpTres}>x<sup>3</sup></Boton>
        <Boton click={raizCubica}><sup>3</sup>√</Boton>
        <Boton click={elevadoN}>x<sup>n</sup></Boton>
      </section>
      <section className='fila'>
        <Boton click={agregarInput}>7</Boton>
        <Boton click={agregarInput}>8</Boton>
        <Boton click={agregarInput}>9</Boton>
        <Boton click={agregarInput}>/</Boton>
        <Boton click={agregarInput}>%</Boton>
        <Boton click={ln}>ln</Boton>
      </section>
      <section className='fila'>
        <Boton click={agregarInput}>4</Boton>
        <Boton click={agregarInput}>5</Boton>
        <Boton click={agregarInput}>6</Boton>
        <Boton click={agregarInput}>*</Boton>
        <Boton click={log}>log</Boton>
        <Boton click={eFuncion}>e</Boton>
      </section>
      <section className='fila'>
        <Boton click={agregarInput}>1</Boton>
        <Boton click={agregarInput}>2</Boton>
        <Boton click={agregarInput}>3</Boton>
        <Boton click={agregarInput}>-</Boton>
        <Boton click={agregarInput}>MR</Boton>
        <Boton click={agregarInput}>.</Boton>
        
      </section>
      <section className='fila'>
      <Boton click={pi}>π</Boton>
        <Boton click={agregarInput}>0</Boton>
        <Boton click={agregarInput}>+</Boton>

        <BotonClear clickClear={() => setInput('')}>AC</BotonClear>
        <Boton click={calcularResultado}>=</Boton>       
      </section>

      </section>
    </div>
  );
}

export default App;
