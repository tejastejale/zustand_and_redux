import React from "react";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../utils/FileUpload";

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
    <div className="flex justify-evenly">
      <div className="flex-col">
        <p>Zustand data: {data}</p>
        <button
          className="p-1 px-2 w-full cursor-pointer rounded bg-gray-700"
          onClick={() => handleZustandIncrement()}
        >
          Increment
        </button>
      </div>
      <FileUpload />
      <div className="flex-col ">
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
