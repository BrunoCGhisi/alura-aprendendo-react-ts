import React, { useState } from "react";
import style from "./List.module.scss";
import Item from "./Item";
import IHomeWork from '../../types/homeWorkVO'



function List({ homeWorks}: {homeWorks: IHomeWork[]}) {

  return (
    <aside className={style.listTask}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {homeWorks.map((list, index) => (
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
