import { Dispatch, ReactNode, SetStateAction } from "react";

export default interface IModalProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}