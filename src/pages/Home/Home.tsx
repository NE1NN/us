import Block from "../../components/Block";
import GiftBox from "../../components/GiftBox/GiftBox";
import Countdown from "./Countdown";

export default function Home() {
  return (
    <div className="bg-blue-400 h-screen w-screen p-20 flex flex-col gap-5">
      <Block className="w-full">
        <div className="text-2xl text-blue-700 font-bold">
          Days we've been together
        </div>
        <Countdown />
      </Block>

      <div className="justify-center text-center text-3xl text-blue-700 font-bold mt-20">
        Happy 6 Months Baby!!!
      </div>
      <GiftBox />
    </div>
  );
}
