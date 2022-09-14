export function convertHourStringToMinutes(hourString: string) {
  console.log("BEEM AQUI:", hourString);
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}
