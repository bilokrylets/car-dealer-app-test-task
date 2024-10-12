import Spinner from '@/app/_components/Spinner';
import VehicleList from '@/app/result/[makeId]/[year]/VehicleList';
import { Suspense } from 'react';
import { fetchVehicleMake } from '@/app/_services/fetchVehicleMake';
import { VehicleMake } from '@/app/_models/vehicleMake';
import { yearsArray } from '@/app/_utils/yearList';

export async function generateStaticParams() {
  const products = await fetchVehicleMake();

  const paths = products.flatMap((make: VehicleMake) =>
    yearsArray.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.toString(),
    }))
  );

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
