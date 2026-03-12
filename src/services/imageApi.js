const ACCESS_KEY = import.meta.env.VITE_API_KEY;

export async function searchImagesApi(query, page = 1) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`,
  );

  const data = await response.json();
  return data.results;
}
