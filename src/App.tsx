import { Laptop } from "lucide-react";
import BtnTheme from "./components/BtnTheme";
import reactIcon from "./assets/react.svg";

function App() {
  return (
    <div className="dark:bg-gray-800 dark:text-white h-dvh w-dvw transition delay-100 duration-300 ease-out">
      <div className="dark:bg-amber-50 bg-gray-800 dark:text-black text-white flex gap-2 p-2 items-center justify-between">
        <div className="flex gap-2">
          <Laptop />
          <p>Heyker David Vargas</p>
          <div className="flex flex-wrap gap-1">
            <img src={reactIcon} alt="icono de react" width={24} />
            <img src={reactIcon} alt="icono de react" width={24} />
            <img src={reactIcon} alt="icono de react" width={24} />
            <img src={reactIcon} alt="icono de react" width={24} />
          </div>
        </div>
        <BtnTheme />
      </div>
    </div>
  );
}

export default App;
