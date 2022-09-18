import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  id?: string;
}

export function Input({ type = 'text', label, id, ...rest }: InputProps) {
  return (
    <div className="flex bg flex-col gap-2">
      <label htmlFor={id} className="block">
        {label}
      </label>
      {/* <span className="block text-sm font-bold text-white py-2">{label}</span> */}
      <input
        id={id}
        name={id}
        type={type}
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        {...ReadableStream}
      />
    </div>
  );
}
