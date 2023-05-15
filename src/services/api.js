import axios from "axios";

const API_KEY = "34989371-d98b3f165afd7d2509d6f9eb9";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(searchQuery, page) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        page: page,
        per_page: 12,
        safesearch: true,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
