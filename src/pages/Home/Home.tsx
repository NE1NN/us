import { useState } from "react";
import Block from "../../components/Block";
import GiftBox from "../../components/GiftBox/GiftBox";
import Countdown from "./Countdown";
import Modal from "../../components/Modal/Modal";

export default function Home() {
  const [showClickHere, setShowClickHere] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-screen h-screen relative">
      <div className="bg-blue-400 p-10 flex flex-col gap-5 h-full">
        <Block className="w-full">
          <div className="text-2xl text-blue-700 font-bold">
            Time together
          </div>
          <Countdown />
        </Block>

        <div className="text-center flex flex-col items-center gap-5">
          <div className="justify-center  text-3xl text-blue-700 font-bold mt-5">
            Happy 6 Months Baby!!!
          </div>
          {showClickHere && (
            <button
              className="bg-blue-500 w-fit px-6 py-3 rounded-lg text-blue-100 font-semibold cursor-pointer hover:bg-blue-700"
              onClick={() => setShowModal(true)}
            >
              Click Me
            </button>
          )}
        </div>
        <GiftBox onClick={() => setShowClickHere(true)} />
      </div>

      {/* Modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}
