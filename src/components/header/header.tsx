import { ChevronLeft, X } from "lucide-react";

function Header() {
  return (
    <div className="text-white bg-cyan-800 w-full h-28">
      <div className="flex items-center justify-around">
        <ChevronLeft className="text-yellow-200" />
        <h1 className="font-bold text-xl">clinicPesa</h1>
        <X className="text-yellow-200" />
      </div>
      <div className="text-center justify-center py-5">
        <p className=" text-xs font-bold">Good Morning, Robert</p>
      </div>
    </div>
  );
}

export default Header;
