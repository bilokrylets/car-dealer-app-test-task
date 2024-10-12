'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { VehicleMake } from './_models/vehicleMake';
import Select from './_components/Select';
import { yearsList } from './utils/yearList';
import LinkButton from './_components/LinkButton';

export default function Home() {
  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[]>([]);
  const [selectedMakeId, setSelectedMakeId] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    async function fetchVehicle() {
      try {
        const response = await fetch(
          'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
        );
        const data = await response.json();
        setVehicleMakes(data.Results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVehicle();
  }, []);

  const handleMakeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMakeId(e.target.value);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const isButtonDisabled = !selectedMakeId || !selectedYear;

  return (
    <div className="flex flex-col gap-5 w-full max-w-[400px] m-auto ">
      <Select
        label="Select vehicle make: "
        options={vehicleMakes.map((make) => ({
          value: make.MakeId,
          label: make.MakeName,
        }))}
        placeholder="Select make"
        onChange={handleMakeChange}
        currentValue={selectedMakeId}
      />

      <Select
        label="Select model year"
        options={yearsList}
        placeholder="Select year"
        onChange={handleYearChange}
        currentValue={selectedYear}
      />

      <LinkButton
        href={`/result/${selectedMakeId}/${selectedYear}`}
        disabled={isButtonDisabled}
      >
        Next
      </LinkButton>
    </div>
  );
}
