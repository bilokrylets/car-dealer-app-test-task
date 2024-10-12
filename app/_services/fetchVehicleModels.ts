export async function fetchVehicleModels(makeId: string, year: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GET_MODEL_URL}/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error(error);
  }
}
