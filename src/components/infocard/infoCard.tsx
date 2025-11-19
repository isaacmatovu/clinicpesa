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
            <p className="text-cyan-950 font-medium mx-auto">Balance</p>
            <p className="text-blue-950 text-3xl font-bold">UGX 50,000</p>
          </div>
          <div className="flex justify-self-end items-end ml-8 mb-2">
            <EyeOff className="text-cyan-950" />
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center mt-5">
          <div className="flex justify-center gap-4 items-center border-b-[0.5px] border-gray-200 pb-2 px-4">
            <div className="flex gap-1">
              <p className="text-neutral-500 text-xs">Frequency:</p>
              <p className="text-neutral-500 font-medium text-xs">Monthly</p>
            </div>
            <div className="flex">
              <div className="text-gray-600 flex gap-1">
                <p className="text-xs text-neutral-500">AutoSave</p>
                <p className="text-xs text-neutral-500">amount:</p>
              </div>
              <div className="text-neutral-700 font-medium flex gap-1">
                <p className="text-xs text-neutral-500">UGX </p>
                <p className="text-xs text-neutral-500">1,000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 pb-3">
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
