import React from 'react';

export interface TextInputProps {
  value: string;
  padding: string;
  border: string;
  borderColor: string;
  placeholder: string;
  width: string;
}

export default function TextInput({
  value,
  padding,
  border,
  borderColor,
  placeholder,
  width,
}: TextInputProps) {
  return (
    <input
      className={`${width} ${padding} ${border} ${borderColor}`}
      value={value}
      placeholder={placeholder}
    />
  );
}
