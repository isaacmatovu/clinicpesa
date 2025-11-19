import { useState } from "react";
import AccountContainer from "../accountoption/accountOption";

function Selector() {
  const [options, setOptions] = useState<string>("options");

  const handleOptions = () => {
    setOptions("options");
  };

  const handleInvest = () => {
    setOptions("invest");
  };

  const handleTransactions = () => {
    setOptions("transactions");
  };
  return (
    <div className="mt-6">
      <div className="flex justify-center items-center gap-2 mb-3">
        {options === "options" ? (
          <div className="w-3 h-1 bg-amber-300 rounded-full"></div>
        ) : (
          <>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </>
        )}
        {options === "invest" ? (
          <div className="w-3 h-1 bg-amber-300 rounded-full"></div>
        ) : (
          <>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </>
        )}
        {options === "transactions" ? (
          <div className="w-3 h-1 bg-amber-300 rounded-full"></div>
        ) : (
          <>
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </>
        )}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <p onClick={handleOptions}>
          {options === "options" ? (
            <p className=" text-blue-950 font-bold border-b-4 pb-3 border-amber-300 border-spacing-4">
              ACCOUNT OPTIONS
            </p>
          ) : (
            <p className="mb-2 text-neutral-500 font-medium">ACCOUNT OPTIONS</p>
          )}
        </p>
        <p onClick={handleInvest}>
          {options === "invest" ? (
            <p className="mb-2 text-blue-950 font-bold border-b-4 pb-3 border-amber-300 rounded-tr-2xl">
              INVEST
            </p>
          ) : (
            <p className="mb-2 text-neutral-500 font-medium">INVEST</p>
          )}
        </p>
        <p onClick={handleTransactions}>
          {options === "transactions" ? (
            <p className="mb-2 text-blue-950 font-bold border-b-4 pb-3 border-amber-300 rounded-t-2xl">
              TRANSACTIONS
            </p>
          ) : (
            <p className="mb-2 text-neutral-500 font-medium">TRANSACTIONS</p>
          )}
        </p>
      </div>
      {options === "options" ? <AccountContainer /> : null}
    </div>
  );
}

export default Selector;
