import IHomeWork from "../../../types/homeWorkVO";
import style from "./Item.module.scss";

interface Props extends IHomeWork {
  selectHomeWork: (selectedHomeWork: IHomeWork) => void;
}

export default function Item({
 
  homeWork,
  time,
  selected,
  finished,
  id,
  selectHomeWork,
}: Props) {
  console.log("item atual:", { id });

  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""} ${
        finished ? style.finishedItem : ""
      }`}
      onClick={() =>
        !finished &&
        selectHomeWork({
          homeWork,
          time,
          selected,
          finished,
          id,
        })
      }
    >
      <h3>{homeWork}</h3>
      <span>{time}</span>
      {finished && (
        <span className={style.finished} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}
