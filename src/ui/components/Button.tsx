// Button.tsx

import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-zinc-700" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
