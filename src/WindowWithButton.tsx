import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { decrement, increment } from "./counterSlice";
import { useAppDispatch } from "./store";

export interface IElectronAPI {
  consoleLogResult: () => void;
}

declare global {
  interface Window {
    electron: IElectronAPI;
  }
}
const consoleLogResult = () => (dispatch: Dispatch) => {
  console.log("consoleLogResult");
  window.electron.consoleLogResult();
};
const WindowWithButton = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          dispatch(consoleLogResult());
        }}
      >
        =
      </button>
    </>
  );
};

export default WindowWithButton;
