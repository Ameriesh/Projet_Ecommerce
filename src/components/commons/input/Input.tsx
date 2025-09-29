import React, { type FC, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
  error?: string;
};

const Input: FC<InputProps> = ({ label, className = "", error, ...props }) => {
  return (
    <div className={`flex flex-col ${label ? "mb-4" : ""} w-full`}>
      {label && (
        <label className="input-label text-[var(--color-neutral-700)]">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full
          h-10
          px-4
          py-2
          border
          ${error ? 'border-[var(--color-error-500)]' : 'border-[var(--color-neutral-300)]'}
          rounded-lg
          focus:outline-none
          focus:ring-2
          ${error ? 'focus:ring-[var(--color-error-500)]' : 'focus:ring-[var(--color-primary-300)]'}
          focus:border-transparent
          transition-all
          duration-200
          bg-white
          text-[var(--color-neutral-800)]
          placeholder-[var(--color-neutral-400)]
          hover:border-[var(--color-primary-200)]
          ${className}
        `}
      />
      {error && (
        <span className="error-message text-[var(--color-error-500)] text-sm mt-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;