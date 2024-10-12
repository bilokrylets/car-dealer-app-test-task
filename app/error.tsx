'use client';

import LinkButton from './_components/LinkButton';

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  return (
    <div className="m-auto flex flex-col py-8  items-center gap-4">
      <h3 className="text-4xl  font-extrabold uppercase">Error</h3>
      <p className="text-md  ">Something went wrong, {error.message}</p>
      <LinkButton href="/">Return Home</LinkButton>
    </div>
  );
}
