import "./App.css";
import Columns from "./components/Columns";

function App() {
  return (
    <div className="bg-gray-500">
      <div className=" min-h-screen flex justify-center items-start">
        <Columns state="PLANNED" />
        <Columns state="ONGOING" />
        <Columns state="DONE" />
      </div>
      <div className="absolute top-0 right-40 mt-4">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          className="bg-red-500 hover:bg-red-600 text-gray-200 hover:text-gray-400 rounded p-1"
        >
          Reset Table
        </button>
      </div>
    </div>
  );
}

export default App;
