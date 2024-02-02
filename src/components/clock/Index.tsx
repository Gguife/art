import { useState, useEffect } from "react";
import { ClockContainer } from "./Style";

const Clock = () =>{
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTwoDigits = (value: number) => (value < 10 ? `0${value}` : value);
  const get12HourFormat = (hours: number) => (hours % 12 === 0 ? 12 : hours % 12);
  const getAmPm = (hours: number) => (hours >= 12 ? "PM": "AM");

  const hours = get12HourFormat(time.getHours());
  const min = formatTwoDigits(time.getMinutes());
  const amPm = getAmPm(time.getHours());

  return(
    <ClockContainer>
      <div className="time">
        <span className="hour">{hours}</span>
        <span>:</span>
        <span className="min">{min}</span>
        <span className="amPm">{amPm}</span>
      </div>
    </ClockContainer>
  )
}

export default Clock;