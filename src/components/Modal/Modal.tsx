import { useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

type ModalProps = {
  onClose: () => void;
};

export default function Modal({ onClose }: ModalProps) {
  const [page, setPage] = useState(0);

  return (
    <div className="w-screen h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div
        className="bg-black opacity-50 absolute flex w-screen h-screen justify-center items-center -z-10"
        onClick={onClose}
      />

      {page === 0 && <FirstPage onNext={() => setPage(1)} />}
      {page === 1 && <SecondPage />}
    </div>
  );
}
