import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Sua tarefa:</label>
          <input
            type="text"
            name="tarefa"
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
            id="timer"
            min={"00:00:00"}
            max={"01:30:00"}
            required
          />
        </div>
        <Button>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Form;
