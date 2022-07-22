import React from "react";
import { decrement, increment } from "./counterSlice";
import { useAppDispatch } from "./store";

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
    </>
  );
};

export default WindowWithButton;
