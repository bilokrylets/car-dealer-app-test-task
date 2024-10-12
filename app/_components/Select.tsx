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
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
    </>
  );
}
