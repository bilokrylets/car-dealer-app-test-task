import LinkButton from './_components/LinkButton';

export default async function NotFound() {
  return (
    <div className="m-auto flex flex-col py-8  items-center gap-4">
      <h2 className="text-4xl  font-extrabold uppercase">Page not found</h2>

      <LinkButton href="/">Return Home</LinkButton>
    </div>
  );
}
