/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';

import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit' | undefined;
  title?: string;
  value: string;
  label?: string;
  bgColor?: string;
}

export function ButtonModal({
  type,
  title,
  label,
  bgColor,
  value = '',
  ...rest
}: Props) {
  return (
    <ToggleGroup.Item
      value={value}
      type={type || 'button'}
      title={title}
      className={`w-8 h-8 rounded ${bgColor || 'bg-zinc-900'}`}
      {...rest}
    >
      {label}
    </ToggleGroup.Item>
  );
}
