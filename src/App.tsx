import {Header,Content} from "./components";

function App() {
  return (
    <div className="dark:bg-gray-800 dark:text-white h-dvh w-dvw transition delay-100 duration-300 ease-out flex flex-col">
      <Header />
      <Content />
    </div>
  );
}

export default App;
