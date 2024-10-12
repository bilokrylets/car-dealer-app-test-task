import { ChangeEvent } from 'react';

type Props = {
  label: string;
  name?: string;
  options: { value: string | number; label: string | number }[];
  placeholder?: string;

  // optional for server action
  currentValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};
export default function Select({
  label,
  name,
  options,
  currentValue,
  onChange,
  placeholder = 'Select a value',
}: Props) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium  text-white">
        {label}
      </label>
      <select
        className="border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        name={name}
        onChange={onChange}
        value={currentValue}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
