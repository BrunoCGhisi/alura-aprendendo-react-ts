import React from "react";
import style from "./List.module.scss";
import Item from "./Item";

function List() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "01:30:00",
    },
    {
      tarefa: "Flask Api",
      tempo: "01:00:00",
    },
  ];

  return (
    <aside className={style.listTask}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((list, index) => (
          <Item
            key={index}
            {...list} //Aqui ele pega TODAS as informações, então pode vir coisa de mais
            //Pode fazer manualmente também. Dessa forma:
            //tarefa={item.tarefa}
            //tempo={item.tempo}
          />
          
        ))}
      </ul>
    </aside>
  );
}

export default List;
