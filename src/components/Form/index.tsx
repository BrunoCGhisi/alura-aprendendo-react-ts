import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import IHomeWork from "../../types/homeWorkVO";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
  setHomeWorks: React.Dispatch<React.SetStateAction<IHomeWork[]>>;
}> {
  state = {
    homeWork: "",
    time: "00:00:00",
  };

  AddhomeWork(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setHomeWorks((oldHomeWorks) => [
      ...oldHomeWorks,
      {
        ...this.state,
        selected: false,
        finished: false,
        id: uuidv4()
      },
    ]);
    console.log("state", this.state);
    this.setState({
      homeWork: "",
      time: "00:00:00",
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.AddhomeWork.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Sua tarefa:</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.homeWork}
            onChange={(evento) =>
              this.setState({ ...this.state, homeWork: evento.target.value })
            }
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
            value={this.state.time}
            onChange={(evento) =>
              this.setState({ ...this.state, time: evento.target.value })
            }
            id="timer"
            min={"00:00:00"}
            max={"01:30:00"}
            required
          />
        </div>
        <Button type="submit"> Adicionar</Button>
      </form>
    );
  }
}

export default Form;
