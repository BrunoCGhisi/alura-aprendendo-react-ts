import IHomeWork from "../../../types/homeWorkVO";
import style from "../List.module.scss";

export default function Item({
  //Declarando os props
  homeWork,
  time,
  selected,
  finished,
  id,
}: IHomeWork) {
  console.log('item atual:', {id})

  return (
    <li className={style.item}>
      <h3> {homeWork} </h3>
      <span> {time} </span>
    </li>
  );
}
