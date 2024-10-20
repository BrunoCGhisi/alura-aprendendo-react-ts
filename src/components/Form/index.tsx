import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import IHomeWork from "../../types/homeWorkVO";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setHomeWorks: React.Dispatch<React.SetStateAction<IHomeWork[]>>;
}

function Form({ setHomeWorks }: Props) {
  const [homeWork, setHomeWork] = useState("");
  const [time, setTime] = useState("00:00");

  function AddhomeWork(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setHomeWorks((oldHomeWorks) => [
      ...oldHomeWorks,
      {
        homeWork,  
        time,      
        selected: false,
        finished: false,
        id: uuidv4(),
      },
    ]);
    
    setHomeWork("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={AddhomeWork}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Sua tarefa:</label>
        <input
          type="text"
          name="tarefa"
          value={homeWork}
          onChange={(evento) => setHomeWork(evento.target.value)}
          id="tarefa"
          placeholder="Qual a sua tarefa?"
          required
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="timer">Qual o tempo estimado: </label>
        <input
          type="time"
          step="1"
          name="timer"
          value={time}
          onChange={(evento) => setTime(evento.target.value)}
          id="timer"
          min={"00:00:00"}
          max={"01:30:00"}
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
