import React, { useState } from "react";
import style from "./List.module.scss";
import Item from "./Item";
import IHomeWork from "../../types/homeWorkVO";

interface Props {
  homeWorks: IHomeWork[];
  selectHomeWork: (selectedHomeWork: IHomeWork) => void;
}
function List({ homeWorks, selectHomeWork }: Props) {
  return (
    <aside className={style.listTask}>
      <h2>Estudos do dia</h2>
      <ul>
        {homeWorks.map((list, index) => (
          <Item
            selectHomeWork={selectHomeWork}
            key={list.id}
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
