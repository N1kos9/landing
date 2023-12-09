import logo from "../public/2.png";
function App() {
  return (
    <>
      <main>
        <div className="text-white flex items-center p-4">
          <h1>Murariu Nikos</h1>
          <img src={logo} height={100} width={100} alt="" />
        </div>

        <div className="text-xl text-white">frontend developer</div>
      </main>
    </>
  );
}

export default App;
