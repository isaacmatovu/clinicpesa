import { EyeOff, Send, Wallet } from "lucide-react";

function InfoCard() {
  return (
    <div className="-mt-8">
      <div className="bg-white mx-6 rounded-2xl shadow-2xl">
        <div className="pl-2 bg-gray-300 w-[70px]  rounded-br-[10px] rounded-tl-[10px]">
          <p className="text-cyan-950 font-medium">Savings</p>
        </div>
        <div className="flex justify-center items-end">
          <div className="flex flex-col justify-center items-center">
            <p className="text-cyan-950 font-medium">Balance</p>
            <p className="text-blue-950 text-3xl font-bold">UGX 50,000</p>
          </div>
          <div className="flex justify-center items-end ml-8 mb-2">
            <EyeOff className="text-cyan-950" />
          </div>
        </div>
        <div className="flex justify-around items-center mt-5 border-b-[0.5px] border-gray-200 mx-10 pb-2">
          <div className="flex gap-1">
            <p className="text-gray-600">Frequency:</p>
            <p className="text-neutral-700 font-medium">Monthly</p>
          </div>
          <div className="flex">
            <p className="text-gray-600">AutoSave amount:</p>
            <p className="text-neutral-700 font-medium">UGX 1,000</p>
          </div>
        </div>
        <div className="flex justify-center my-3">
          <div className="flex flex-col justify-center items-center mr-8">
            <Wallet className="text-cyan-950" />
            <p className="text-cyan-950 font-medium">Deposit</p>
          </div>
          <div className="border-l border-l-amber-300 h-8"></div>
          <div className="flex flex-col justify-center items-center ml-8">
            <Send className="text-cyan-950" />
            <p className="text-cyan-950 font-medium">Share Medical</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
