import Style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const min = Math.floor(time / 60);
  const sec = time % 60;
  const [minTen, minUnit] = String(min).padStart(2, '0');
  const [secTen, secUnit] = String(sec).padStart(2, '0');

  return (
    <>
      <span className={Style.clockNumber}>{minTen}</span>
      <span className={Style.clockNumber}>{minUnit}</span>
      <span className={Style.clockDivider}>:</span>
      <span className={Style.clockNumber}>{secTen}</span>
      <span className={Style.clockNumber}>{secUnit}</span>
    </>
  );
}
