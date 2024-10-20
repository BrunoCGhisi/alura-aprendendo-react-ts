import { useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import IHomeWork from "../../types/homeWorkVO";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selected: IHomeWork | undefined;
}
export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>();
  if (selected?.time) {
    setTime(timeForSeconds(selected.time));
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>
        Escolha um card e inicie o cronômetro
        Tempo: {time}  
      </p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
