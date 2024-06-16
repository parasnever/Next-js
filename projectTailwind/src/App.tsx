import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-slate-900 grid place-content-center h-screen">
        <div>
          <div className=" p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 ">
            <div>
              <img className=" h-12 w-12" src="https://hips.hearstapps.com/hmg-prod/images/peaky-blinders-1614180392.jpg?crop=1xw:0.995850622406639xh;center,top&resize=640:*" alt="picky bliders" />
            </div>
            <div className=" text-2xl font-medium text-black ">
              Pinky Blinders
              <p className=" text-slate-500 text-base">By Cillian murphy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
