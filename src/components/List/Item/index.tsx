import IHomeWork from "../../../types/homeWorkVO";
import style from "./Item.module.scss";

interface Props extends IHomeWork {
  selectHomeWork: (selectedHomeWork: IHomeWork) => void;
}

export default function Item({
  //Declarando os props
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
      className={`${style.item} ${selected ? style.selectedItem : ""}`}
      onClick={() =>
        selectHomeWork({
          homeWork,
          time,
          selected,
          finished,
          id,
        })
      }
    >
      <h3> {homeWork} </h3>
      <span> {time} </span>
    </li>
  );
}
