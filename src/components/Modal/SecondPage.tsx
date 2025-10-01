import { NavLink } from "react-router";
import Block from "../Block";
import first from "../../assets/1st.jpg";
import second from "../../assets/2nd.jpg";
import third from "../../assets/3rd.jpg";
import fourth from "../../assets/4th.jpg";
import fifth from "../../assets/5th.jpg";
import sixth from "../../assets/6th.jpg";
import seventh from "../../assets/7th.jpg";
import eighth from "../../assets/8th.jpg";
import ninth from "../../assets/9th.jpg";
import tenth from "../../assets/10th.jpg";
import eleventh from "../../assets/11th.jpg";
import twelveth from "../../assets/12th.jpg";
import thirteenth from "../../assets/13th.jpg";
import fourteenth from "../../assets/14th.jpg";
import fifteenth from "../../assets/15th.jpg";
import sixteenth from "../../assets/16th.jpg";
import seventeenth from "../../assets/17th.jpg";
import eighteenth from "../../assets/18th.jpg";
import nineteenth from "../../assets/19th.jpg";
import twentieth from "../../assets/20th.jpg";
import twentyfirst from "../../assets/21st.jpg";
import twentysecond from "../../assets/22nd.jpg";
import twentythird from "../../assets/23rd.jpg";
import twentyfourth from "../../assets/24th.jpg";

export default function SecondPage() {
  const images = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelveth,
    thirteenth,
    fourteenth,
    fifteenth,
    sixteenth,
    seventeenth,
    eighteenth,
    nineteenth,
    twentieth,
    twentyfirst,
    twentysecond,
    twentythird,
    twentyfourth,
  ];

  return (
    <Block className="w-3xl z-10 p-5">
      <div className="font-bold text-xl">Pictures Of Us </div>

      <div className="grid grid-cols-6">
        {images.map((i) => (
          <img src={i} className="w-full h-32 object-cover" />
        ))}
      </div>

      <NavLink
        to="/flowers"
        className={
          "w-fit px-6 py-3 rounded-lg text-blue-100 font-semibold cursor-pointer bg-blue-700 hover:bg-blue-400"
        }
      >
        Click Me
      </NavLink>
    </Block>
  );
}
