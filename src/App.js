import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css"
import { RouteApp } from "./route";
import  CarrinhoContextProvider  from "./hooks/CarrinhoContext.js";
import { ThemeProvider } from "styled-components";
import { tema } from "./_config/tema";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <CarrinhoContextProvider>
        <ToastContainer />
        <RouteApp />
      </CarrinhoContextProvider>
    </ThemeProvider>
  );
}

export default App;
