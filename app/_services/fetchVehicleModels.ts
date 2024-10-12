export async function fetchVehicleModels(makeId: string, year: string) {
  const response = await fetch(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data = await response.json();
  return data.Results;
}
