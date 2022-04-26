import { ForwardedRef, forwardRef } from 'react';

import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: FieldError;
}

export const Input = forwardRef(({error, className, ...props}: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div>
      <input ref={ref} {...props} />
      {error && <span role="alert">{error.message}</span>}
    </div>
  );
});