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
        className="block w-auto rounded-lg border border-gray-600 bg-gray-700 px-5 py-2.5 text-sm text-white placeholder-gray-400 enabled:hover:border-blue-500 enabled:hover:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={disabled}
      >
        {children}
      </button>
    </Link>
  );
}
