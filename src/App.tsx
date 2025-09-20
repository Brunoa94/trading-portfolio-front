import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/app/layout/navbar";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <BrowserRouter>
        <>
          <Navbar.Mobile />
          <Navbar.Desktop />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
