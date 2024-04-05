import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
