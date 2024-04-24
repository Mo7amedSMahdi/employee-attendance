// TextField.tsx

import React from "react";

interface TextFieldProps {
  type?: string | undefined;
  disabled?: boolean;
  label?: React.ReactNode;
  placeholder?: string; 
}

const TextField: React.FC<TextFieldProps> = ({
  disabled,
  type,
  label,
  placeholder,
}) => {
  return (
    <div>
      { label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label> }
      <input
        type={type}
        readOnly={disabled}
        name="password"
        id="password"
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
  disabled: false,
  label: '',
  placeholder: ''
};
export default TextField;
