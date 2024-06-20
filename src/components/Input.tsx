import { FC } from "react";
import { IInput } from "../interface/input";

const Input: FC<IInput> = (props) => {
  return <input {...props} />;
};

export default Input;
