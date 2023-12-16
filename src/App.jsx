import logo from "../public/2.png";
import rotatingCircle from "../public/1.png";
function App() {
  return (
    <>
      <main className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="text-white flex items-center p-4 justify-evenly">
          <h1 className="text-2xl">Murariu Nikos</h1>
          <img src={logo} height={70} width={70} alt="" />
        </div>

        <div className="text-4xl text-white">frontend developer</div>
        <div className="absolute bottom-0">
          <img src={rotatingCircle} height={300} width={300} alt="" />
        </div>
      </main>
    </>
  );
}

export default App;
