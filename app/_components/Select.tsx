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
      <label className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <select
        className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
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
