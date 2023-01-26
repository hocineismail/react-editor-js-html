import { useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainEditor from "./Editor/main";
import Result from "./Editor/result";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
