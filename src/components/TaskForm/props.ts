import { DetailedHTMLProps, Dispatch, FormHTMLAttributes, SetStateAction } from "react";
import { SubmitHandler } from "react-hook-form";
import ITaskForm from "../../interfaces/taskForm.interface";

export default interface ITaskFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  submitHandler: SubmitHandler<ITaskForm>;
  buttonTitle: string;
  title?: string;
  description?: string;
  date?: string;
  setActiveModal: Dispatch<SetStateAction<boolean>>;
}