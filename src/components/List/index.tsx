import React from "react";

function List() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '01:30:00'
    }, {
        tarefa: 'Flask Api',
        tempo: '01:00:00'
    }]
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((lista, index) => (
            <li key={index}>
                <h3> {lista.tempo} </h3>
                <span> {lista.tempo}</span>
            </li>
        ))}
      </ul>
    </aside>
  );
}

export default List