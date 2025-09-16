import { useState, useEffect } from "react";

export const Tododate = () => {
  //   we use useeffect for to prevent the memory leakage
  // and after a second time changes;
  const [currentTime, setTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      let day = new Date();
      let hour = day.getHours();
      let min = day.getMinutes();
      let sec = day.getSeconds();
      sec = sec < 10 ? `0${sec}` : sec;
      let ampm = hour > 12 ? "PM" : "AM";
      hour = hour % 12 || 12;
      min = min < 10 ? `0${min}` : min;
      setTime(
        `${day.getDate()}/${
          day.getMonth() + 1
        }/${day.getFullYear()} - ${hour}:${min}:${sec} ${ampm}`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <p className="text-3xl mt-2 text-center font-bold text-white">
      {currentTime}
    </p>
  );
};
