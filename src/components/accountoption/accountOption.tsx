import {
  CircleCheck,
  ClipboardMinus,
  HandCoins,
  UsersRound,
} from "lucide-react";
import AccountOption from "./accountoptionCard";

function AccountContainer() {
  return (
    <div className="bg-neutral-100 h-[45vh]">
      <div className="flex justify-center items-start pt-4">
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3">
          <AccountOption text="Pay Medical Bill" icon={<ClipboardMinus />} />
          <AccountOption text="Get Loan" icon={<HandCoins />} />
          <AccountOption text="Join MaMas" icon={<UsersRound />} />
          <AccountOption text="My Approavals" icon={<CircleCheck />} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-11">
        <p className="text-gray-700">
          clinicPesa <span className="text-blue-950 font-medium">T&Cs </span>
          apply.
        </p>
      </div>
    </div>
  );
}

export default AccountContainer;
