export async function fetchVehicleMake() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_GET_MAKES_URL}`);
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error(error);
  }
}
