export async function fetchVehicleMake() {
  try {
    const response = await fetch(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
    );
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error(error);
  }
}
