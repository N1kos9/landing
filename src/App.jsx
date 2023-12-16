import logo from "../public/2.png";
import rotatingCircle from "../public/1.png";
function App() {
  return (
    <>
      <main className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="text-white flex items-center p-4 justify-evenly mt-10">
          <h1 className="text-4xl">Murariu Nikos</h1>
          <img src={logo} height={70} width={70} alt="" />
        </div>

        <div className="text-4xl text-white mt-60">frontend developer</div>
        <div className="absolute bottom-10">
          <img src={rotatingCircle} height={200} width={200} alt="" />
        </div>
      </main>
    </>
  );
}

export default App;
