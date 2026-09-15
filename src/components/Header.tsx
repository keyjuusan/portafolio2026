import { Laptop } from "lucide-react";
import BtnTheme from "./BtnTheme";

export default function Header() {
  return (
    <div className="dark:bg-amber-50 bg-gray-800 dark:text-black text-white flex gap-2 p-2 items-center justify-center ">
      <div className=" sm:w-120 w-full flex justify-between">
        <div className="flex gap-2">
          <Laptop />
          <p>Heyker Vargas Fernandez</p>
          {/*<div className="flex flex-wrap gap-1">
          <img src={reactIcon} alt="icono de react" width={24} />
          <img src={reactIcon} alt="icono de react" width={24} />
          <img src={reactIcon} alt="icono de react" width={24} />
          <img src={reactIcon} alt="icono de react" width={24} />
        </div>*/}
        </div>
        <BtnTheme />
      </div>
    </div>
  );
}
