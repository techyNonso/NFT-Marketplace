import React from "react";
import logo from "../assets/timeless.png";
import { connectWallet } from "../Blockchain.services";
import { useGlobalState, truncate } from "../store";

function Header() {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img className="w-32 cursor-pointer" src={logo} alt="logo" />
      </div>

      <ul className="md:flex-[0.5] text-white md:flex hidden list-none justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer ">Market</li>
        <li className="mx-4 cursor-pointer ">Artist</li>
        <li className="mx-4 cursor-pointer ">Features</li>
        <li className="mx-4 cursor-pointer ">Community</li>
      </ul>
      {connectedAccount ? (
        <button className="shadow-xl shadow-black text-white bg-green-400 hover:bg-green-600 md:text-xs p-2 rounded-full">
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="shadow-xl shadow-black text-white bg-green-400 hover:bg-green-600 md:text-xs p-2 rounded-full"
        >
          Connect wallet
        </button>
      )}
    </div>
  );
}

export default Header;
