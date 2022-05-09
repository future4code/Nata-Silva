import React from "react";
import Router from "./routes/Router";
import { GlobalStyle } from "./AppStyle"


export default function App() {
  return (
    <div>
      <GlobalStyle />

      <Router />
    </div>
  );
}

