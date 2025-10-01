import Block from "../Block";

type FirstPageProps = {
  onNext: () => void;
};

export default function FirstPage({ onNext }: FirstPageProps) {
  return (
    <Block className="w-3xl z-10 p-5">
      <div className="mr-auto font-bold text-xl">Dear Sophie,</div>
      <div>
        Happy 6 months! Crazy how fast time flew, I remember seeing you for the
        first time and mesmerised by how beautiful you looked. Then I managed to
        grab your insta, and then we've been talking a lot since then. I fell in
        love with you much harder when we talked because of how fun you were to
        talk with, even though we just knew each other for a couple of weeks,
        days even, alongside the million reels you sent me. Then we had our
        first date (which you didn't really know it was a date hehe) and
        everything has been magical ever since that.
      </div>

      <div>
        You're really a wonderful girl with a beautiful soul. Very cheerful,
        beautiful, funny, smart, mature, and charismatic. Every moment with you
        feels unreal, and I've never felt like this before in my entire life.
        I've learnt a lot about you as a girl, as my girlfriend, and as a
        person. Learnt about the things you like and dislike. I've always
        admired you, even though you're younger than me, you've made me learn so
        much about life, how to do things properly, and most importantly, about
        love.
      </div>

      <div>
        While our relationship, like any other relationships, hasn't been smooth
        sailing sometimes, and mainly because of my immaturity, I love how
        you're able to communicate your feelings and how to handle some
        scenarios if they happen again in the future. I've made plenty of
        mistakes and even broke my promise by making you cry which, I regret a
        lot. I'm deeply sorry for that, and I will always improve and listen to
        you to be the best man for you
      </div>

      <div>
        So yeah, sorry if it's a bit too long, I just feel like my feelings for
        you can't simply be written with mere words and need thousands of words
        to just convey a fraction of what I feel. All I know is{" "}
        <b className="text-blue-100">I'm deeply in love with you.</b> Happy 6
        months my princess, 999999 months to come :)
      </div>

      <div className="mr-auto mt-5">
        <div className="mr-auto font-bold text-xl">Regards,</div>
        <div className="mr-auto font-bold text-xl">Your Boyfriend, Hindie</div>
      </div>

      <button
        onClick={onNext}
        className={
          "w-fit px-6 py-3 rounded-lg text-blue-100 font-semibold cursor-pointer bg-blue-700 hover:bg-blue-400"
        }
      >
        Click Me
      </button>
    </Block>
  );
}
