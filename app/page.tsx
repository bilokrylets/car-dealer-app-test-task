'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { VehicleMake } from './_models/vehicleMake';
import Select from './_components/Select';
import { yearsList } from './_utils/yearList';
import LinkButton from './_components/LinkButton';
import { fetchVehicleMake } from './_services/fetchVehicleMake';

export default function Home() {
  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[]>([]);
  const [selectedMakeId, setSelectedMakeId] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    async function loadVehicleMakes() {
      setVehicleMakes(await fetchVehicleMake());
    }

    loadVehicleMakes();
  }, []);

  const handleMakeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMakeId(e.target.value);
  };

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const isButtonDisabled = !selectedMakeId || !selectedYear;

  return (
    <div className="m-auto flex w-full max-w-[400px] flex-col gap-5">
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
