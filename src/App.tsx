import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}

export default App;
