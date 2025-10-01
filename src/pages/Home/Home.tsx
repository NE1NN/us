import { useState } from "react";
import Block from "../../components/Block";
import GiftBox from "../../components/GiftBox/GiftBox";
import Countdown from "./Countdown";

export default function Home() {
  const [showClickHere, setShowClickHere] = useState(false);

  return (
    <div className="bg-blue-400 h-screen w-screen p-10 flex flex-col gap-5">
      <Block className="w-full">
        <div className="text-2xl text-blue-700 font-bold">
          Days we've been together
        </div>
        <Countdown />
      </Block>

      <div className="text-center flex flex-col items-center gap-5">
        <div className="justify-center  text-3xl text-blue-700 font-bold mt-5">
          Happy 6 Months Baby!!!
        </div>
        {showClickHere && <button className="bg-blue-500 w-fit px-6 py-3 rounded-lg text-blue-100 font-semibold cursor-pointer hover:bg-blue-700">Click Here</button>}
      </div>
      <GiftBox onClick={() => setShowClickHere(true)} />
    </div>
  );
}
