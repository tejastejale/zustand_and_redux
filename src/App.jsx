import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/screens/Home";
import Index from "./components/Index";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reduxStore";
import { Provider } from "react-redux";

function App() {
  const reduxStore = configureStore({ reducer: reducers });
  return (
    <Provider store={reduxStore}>
      <Routes>
        <Route path="/" element={<Index component={<Home />} />} />
      </Routes>
    </Provider>
  );
}

export default App;
