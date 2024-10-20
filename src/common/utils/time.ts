export function timeForSeconds(time: string) {
  const [hour = "0", min = "0", sec = "0"] = time.split(":");

  const hourInSec = Number(hour) * 3600;
  const minInSec = Number(min) * 60;
  return hourInSec + minInSec + Number(sec);
}
