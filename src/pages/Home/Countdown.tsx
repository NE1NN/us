import { useEffect, useState } from "react";
import { ONE_DAY } from "../../constants/date";

export default function Countdown() {
  const [countdownTimer, setCountdownTimer] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-04-02");

    const calculateTimePassed = () => {
      const currentDate = new Date();
      const timeDifference = currentDate.getTime() - targetDate.getTime();

      const days = Math.floor(timeDifference / ONE_DAY);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      setCountdownTimer({
        years,
        months: months % 12,
        days: days % 30,
      });
    };

    calculateTimePassed();

    const interval = setInterval(() => {
      calculateTimePassed();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-6">
      {Object.entries(countdownTimer).map(([key, values]) => (
        <div
          key={key}
          className="flex flex-col bg-blue-200 items-center w-24 h-24 justify-center border-blue-600 border-b-4 rounded-lg"
        >
          <div className="text-xl text-blue-500 font-bold">{values}</div>
          <div>{key}</div>
        </div>
      ))}
    </div>
  );
}
