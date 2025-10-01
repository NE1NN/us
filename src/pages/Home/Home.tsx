import Countdown from "./Countdown";

export default function Home() {
  return (
    <div className="bg-blue-400 h-screen p-20">
      <div className="bg-blue-500 mx-auto flex flex-col items-center justify-center py-5 gap-3 border rounded-xl">
        <div className="text-xl">Days we've been together</div>
        <Countdown />
      </div>
    </div>
  );
}
