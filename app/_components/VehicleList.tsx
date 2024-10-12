import { Vehicle } from '../_models/vehicle';
import { fetchVehicleModels } from '../_services/fetchVehicleModels';

import LinkButton from './LinkButton';

type Props = { makeId: string; year: string };

export default async function VehicleList({ makeId, year }: Props) {
  const vehicles: Vehicle[] = await fetchVehicleModels(makeId, year);

  if (!vehicles.length) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold">
          No vehicle models found for this make and year.
        </h3>
        <LinkButton href="/">Search again</LinkButton>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center border-b-2 border-gray-800 ">
        Vehicle models of {vehicles[0].Make_Name} for {year}
      </h1>

      <div className="py-4  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
        {vehicles.map((vehicle) => (
          <VehicleListCard key={vehicle.Make_ID} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

type VehicleListCardProps = {
  vehicle: Vehicle;
};

function VehicleListCard({ vehicle }: VehicleListCardProps) {
  return (
    <div className=" bg-gray-700 bg-opacity-75 p-4 rounded-md border-2 border-gray-700">
      <h2 className="text-center text-lg font-semibold border-b-[1px] border-gray-600 mb-2">
        {vehicle.Make_Name} {vehicle.Model_Name}
      </h2>
      <p>Make ID: {vehicle.Make_ID}</p>
      <p>Model ID: {vehicle.Model_ID}</p>
    </div>
  );
}
