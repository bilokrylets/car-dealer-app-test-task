import Spinner from '@/app/_components/Spinner';
import VehicleList from '@/app/_components/VehicleList';
import { fetchVehicleModels } from '@/app/_services/fetchVehicleModels';
import { Suspense } from 'react';

type ResultProps = {
  params: { makeId: string; year: string };
};

export default async function Result({
  params: { makeId, year },
}: ResultProps) {
  const vehicles = await fetchVehicleModels(makeId, year);

  console.log(vehicles);
  return (
    <div className="min-h-screen w-full p-6">
      <Suspense fallback={<Spinner />}>
        <VehicleList makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
}
