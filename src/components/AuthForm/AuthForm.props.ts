import { SubmitHandler } from "react-hook-form";
import IAuthForm from "../../interfaces/authForm.interface";

export default interface IAuthFormProps {
  onSubmit: SubmitHandler<IAuthForm>;
  // isLoading: boolean;
  formAction: string;
  actionLink?: string;
  actionTitle?: string;
  successMsg?: string;
}