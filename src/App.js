import React, {useEffect, useState, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Prueba from './components/Prueba'
import Funcion from './components/Funcion'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EvenBinding from './components/EvenBind'
import ParentComponent from './components/ParentComponent'
import NameList from './components/NameList'


function App() {
  return(
    <div className="App">

      <Form></Form>

     {/*  <NameList></NameList> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <EvenBinding></EvenBinding> */}

      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}

      {/* <Counter></Counter> */}
      {/* <Message></Message> */}

      {/* <Funcion name="Gerardo">
        this is children props
      </Funcion>
      <Funcion name="Rocio">
        <button>Action</button>
      </Funcion>
      <Funcion name="Guillermo"></Funcion> */}

      {/* <Prueba name="Gerardo Clase">
        this is children props with this
      </Prueba>
      <Prueba name="Rocio Clase"></Prueba>
      <Prueba name="Memo Clase"></Prueba>
      <Prueba></Prueba> */}

     {/*  <Form></Form> */}
    </div>
  )
};

export default App;
