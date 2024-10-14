import style from "../List.module.scss";

export default function Item({
  //Declarando os props
  tarefa,
  tempo,
}: {
  //Declarando os tipos do props
  tarefa: string;
  tempo: string;
}) {
  return (
    <li className={style.item}>
      <h3> {tarefa} </h3>
      <span> {tempo} </span>
    </li>
  );
}
