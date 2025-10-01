import { useReducer } from "react";
import "./giftbox.css";

import box from "../../assets/box.png";
import boxLid from "../../assets/box-lid.png";
import kuku from "../../assets/jump-character.png";
import Confetti from "./Confetti/Confetti";

type GiftBoxProps = {
  onClick: () => void;
};

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: "",
};
export default function GiftBox({ onClick }: GiftBoxProps) {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state,
    }),
    init_state,
  );

  const { move, rotating, rotated, jump } = state;

  function animate() {
    const isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    const moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  return (
    <div>
      <Confetti open={jump === "jump"} />
      <div className="img-container">
        <img className={`kuku ${jump}`} src={kuku} alt="kuku" />
        <button
          className="box"
          onClick={() => {
            animate();
            onClick();
          }}
        >
          <img src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </div>
  );
}
