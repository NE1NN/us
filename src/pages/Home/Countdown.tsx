export default function Countdown() {
  const countdownTimer = {
    year: 0,
    months: 3,
    days: 12,
  };

  return (
    <div className="flex gap-6">
      {Object.entries(countdownTimer).map(([key, values]) => (
        <div className="flex flex-col bg-blue-200 items-center w-24 h-24 justify-center">
          <div>{values}</div>
          <div>{key}</div>
        </div>
      ))}
    </div>
  );
}
