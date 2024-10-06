import React from "react";
import Form from "./components/Form";
import List from "./components/List";


function App() {
  return (
    <div className="App">
      Bem-Vindo(a) ao seu agendador de tarefas personalizado!
      <Form />
      <List /> 
    </div>
  );
}

export default App;
