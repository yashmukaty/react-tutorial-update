import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
//component file
import TodoContainer from "./FunctionBased/components/TodoContainer"

//stylesheet
import "./FunctionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);