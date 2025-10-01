import { useState } from "react";
import Block from "../../components/Block";
import GiftBox from "../../components/GiftBox/GiftBox";
import Countdown from "./Countdown";

export default function Home() {
  const [showClickHere, setShowClickHere] = useState(false);

  return (
    <div className="w-screen h-screen relative">
      <div className="bg-blue-400 p-10 flex flex-col gap-5 h-full">
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
          {showClickHere && (
            <button className="bg-blue-500 w-fit px-6 py-3 rounded-lg text-blue-100 font-semibold cursor-pointer hover:bg-blue-700">
              Click Me
            </button>
          )}
        </div>
        <GiftBox onClick={() => setShowClickHere(true)} />
      </div>

      {/* Modal */}
      <div className="w-screen h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="bg-black opacity-50 absolute flex w-screen h-screen justify-center items-center -z-10" />

        <Block className="w-3xl z-10 p-5">
          <div>Dear Sophie,</div>
          <div>
            Happy 6 months! Crazy how fast time flew, I remember seeing you for
            the first time and mesmerised by how beautiful you looked. Then I
            managed to grab your insta, and then we've been talking a lot since
            then. I fell in love with you much harder when we talked because of
            how fun you were to talk with even though we just knew each other
            for a couple of weeks, days even, alongside the million reels you
            sent me. Then we had our first date (which you didn't really know it
            was a date hehe) and everything has been magical ever since that.
          </div>

          <div>
            You're really a wonderful girl with a beautiful soul. Very cheerful,
            beautiful, funny, smart, mature, and charismatic. Every moment with
            you feels unreal, and I've never felt like this before in my entire
            life. I've learnt a lot about you as a girl, as my girlfriend, and
            as a person. Learnt about the things you like and dislike. I've
            always admired you, even though you're younger than me, you've made
            me learn so much about life, how to do things properly, and most
            importantly, about love.
          </div>

          <div>
            While our relationship, like any other relationships, hasn't been
            smooth sailing sometimes, and mainly because of my immaturity, I
            love how you're able to communicate your feelings and how to handle
            some scenarios if it happens again in the future. I've made plenty
            of mistakes and even broke my promise by making you cry which I
            regret a lot. I'm deeply sorry for that and I will always improve
            and listen to you to be the best man for you
          </div>

          <div>
            So yeah, sorry if it's a bit too long, I just feel like my feelings
            for you can't simply be written with mere words and need thousands
            of words to just convey a fraction of what I feel. All I know is{" "}
            <b>I'm deeply in love with you</b>. Happy 6 months my princess,
            999999 months to come :)
          </div>

          <button className="bg-blue-700 w-fit px-6 py-3 rounded-lg text-blue-100 font-semibold cursor-pointer hover:bg-blue-700">
            Click Me
          </button>
        </Block>
      </div>
    </div>
  );
}
