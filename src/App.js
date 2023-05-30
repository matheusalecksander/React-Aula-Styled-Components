import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { RouteApp } from "./route";

function App() {
  return (
    <>
      <ToastContainer />
      <RouteApp />
    </>
  );
}

export default App;
