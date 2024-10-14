import Style from './Clock.module.scss'

export default function Clock() {
  return (
    <>
      <span className={Style.clockNumber}>0</span>
      <span className={Style.clockNumber}>0</span>
      <span className={Style.clockDivider}>:</span>      
      <span className={Style.clockNumber}>0</span>
      <span className={Style.clockNumber}>0</span>
    </>
  );
}
