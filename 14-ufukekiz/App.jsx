import React from "react";
import Providers from "./src/contexts/Providers";
import MainRouter from "./src/routes/MainRouter";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  return (
     <Providers>
       <MainRouter />
     </Providers>
  );
}
