import Link from 'next/link';

type Props = {
  href: string;
  disabled?: boolean;
  children: string;
};
export default function LinkButton({ href, disabled, children }: Props) {
  return (
    <Link href={disabled ? '#' : href}>
      <button
        className=" disabled:cursor-not-allowed border text-sm rounded-lg  block w-auto py-2.5 px-5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white hover:ring-blue-500 hover:border-blue-500"
        disabled={disabled}
      >
        {children}
      </button>
    </Link>
  );
}
