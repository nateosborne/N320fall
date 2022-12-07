export async function NasaAPIConnection(year) {
  let key = "cVTodNIyi0ceB6as6kMZcv7laqYoqSphWMH28HPA";
  let date = year.toString() + "-12-25";
  let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${key}`;

  let res = await fetch(query);

  let data = await res.json();

  return data;
}
