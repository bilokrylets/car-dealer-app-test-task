import Spinner from '@/app/_components/Spinner';
import VehicleList from '@/app/result/[makeId]/[year]/VehicleList';
import { Suspense } from 'react';
import { fetchVehicleMake } from '@/app/_services/fetchVehicleMake';
import { VehicleMake } from '@/app/_models/vehicleMake';

export async function generateStaticParams() {
  const products = await fetchVehicleMake();

  const paths = products.flatMap((make: VehicleMake) =>
    Array.from(
      { length: new Date().getFullYear() - 2014 },
      (_, index) => 2015 + index
    ).map((year) => ({ makeId: make.MakeId.toString(), year: year.toString() }))
  );

  console.log([...paths]);
  return [...paths];
}

type ResultProps = {
  params: { makeId: string; year: string };
};

export default async function Result({
  params: { makeId, year },
}: ResultProps) {
  return (
    <div className="min-h-screen w-full p-6">
      <Suspense fallback={<Spinner />}>
        <VehicleList makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
}
