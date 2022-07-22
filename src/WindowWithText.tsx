import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "./store";
const WindowWithText = () => {
  const value = useSelector((state: RootState) => state.value);

  return <div>{value.toString()}</div>;
};

export default WindowWithText;
