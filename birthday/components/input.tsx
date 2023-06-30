import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  rules?: Record<string, any>;
  minDate?: string;
  maxDate?: string;
  width?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeInput: (_val: any) => void;
  height?: string;
  customClassName?: string;
  value: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  rules = {},
  width = "w-full",
  height = "",
  placeholder = "",
  disabled = false,
  minDate = "",
  maxDate = "",
  customClassName = "",
  value,
  onChangeInput,
  ...rest
}) => {
  return (
    <input
      {...rest}
      placeholder={placeholder}
      type={type}
      value={value}
      autoComplete="new-password"
      name={name}
      min={minDate}
      max={maxDate}
      id={id}
      disabled={disabled}
      onChange={(e) => {
        onChangeInput(e?.target?.value);
      }}
      className={`pl-2 form-input ${width} ${height} ${customClassName} border-gray-300 ${
        disabled ? "bg-gray-200" : "bg-white"
      } border ${
        disabled ? "" : "border-orange-500"
      } mr-3 flex-grow-1 focus:border-orange-500 focus:outline-none focus:ring-0 sm:text-sm rounded-3xl`}
    />
  );
};
