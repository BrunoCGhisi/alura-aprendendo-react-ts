import { useState, useEffect } from "react";
import { timeForSeconds } from "../../common/utils/time";
import IHomeWork from "../../types/homeWorkVO";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selected: IHomeWork | undefined;
  finishHomeWork: () => void
}

export default function Timer({ selected, finishHomeWork }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeForSeconds(selected.time));
    }
  }, [selected]);

  function regress(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regress(counter - 1)
      }
      finishHomeWork();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>
        Escolha um card e inicie o cronômetro
        <br />
      </p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regress(time)}>Começar</Button>
    </div>
  );
}
