import logo from "../public/2.png";
import rotatingCircle from "../public/1.png";
function App() {
  return (
    <>
      <main>
        <div className="text-white flex items-center p-4 justify-between ">
          <h1 className="text-2xl">Murariu Nikos</h1>
          <img src={logo} height={100} width={100} alt="" />
        </div>

        <div className="text-xl text-white">frontend developer</div>
        <div>
          <img src={rotatingCircle} height={300} width={300} alt="" />
        </div>
      </main>
    </>
  );
}

export default App;
