import React, { useState } from "react";
import banner from "../assets/charity.jpeg";
import Modal from "./Modal";
export default function Banner() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex items-center justify-center flex-wrap-reverse w-auto">
      <p className="mx-7 md:w-80 text-center font-sans italic font-bold text-3xl pt-14 w-1/2">
        Contribute to various{" "}
        <span className="text-pink-500 font-mono">CrowdFunding</span> campaigns,
        secured by{" "}
        <p
          className="underline text-purple-600 font-thin cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          Polygon zkEVM
        </p>
      </p>
      {showModal && <Modal setShowModal={setShowModal} />}
      <img
        src={banner}
        className="md:w-96 mt-20 border-pink-500 border-8 w-3/5 animate-pulse"
      />
    </div>
  );
}
