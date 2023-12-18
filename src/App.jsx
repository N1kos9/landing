import logo from "../public/2.png";
import rotatingCircle from "../public/1.png";
import "./index.css";

function App() {
  return (
    <>
      <main className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="text-white flex items-center p-4 justify-evenly mt-10">
          <h1 className="text-4xl">Murariu Nikos</h1>
          <img src={logo} height={70} width={70} alt="" />
        </div>

        <div className="text-white md:text-9xl text-5xl mt-60 text-center">
          <h2 className="background">frontend developer</h2>
          <h1>frontend developer</h1>
        </div>
        <div className="mt-40 bottom-10 text-center flex justify-center items-center">
          <img
            className="animate-rotating"
            src={rotatingCircle}
            height={200}
            width={200}
            alt=""
          />
        </div>
      </main>
    </>
  );
}

export default App;
