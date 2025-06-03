import React from "react";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // Zustand store
  const { data, increment } = store();
  const handleZustandIncrement = () => {
    increment();
  };

  // Redux store
  const reduxData = useSelector((state) => state.tempReducer);
  const dispatch = useDispatch();
  const handleReduxIncrement = () => {
    dispatch({ type: "increment" });
  };

  return (
    <div className="flex">
      <div className="m-auto flex-col">
        <p>Zustand data: {data}</p>
        <button
          className="p-1 px-2 w-full cursor-pointer rounded bg-gray-700"
          onClick={() => handleZustandIncrement()}
        >
          Increment
        </button>
      </div>
      <div className="m-auto flex-col ">
        <p>Redux data: {reduxData}</p>
        <button
          className="p-1 px-2 w-full cursor-pointer rounded bg-gray-700"
          onClick={() => handleReduxIncrement()}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Home;
