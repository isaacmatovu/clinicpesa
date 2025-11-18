import type { ReactElement } from "react";

interface AccountOptionProps {
  text: string;
  icon: ReactElement;
}

function AccountOption(props: AccountOptionProps) {
  const { text, icon } = props;
  return (
    <div>
      <div className="bg-white w-40 h-20 rounded-2xl flex flex-col justify-center items-center shadow-xl">
        <div className="text-cyan-950">{icon}</div>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

export default AccountOption;
