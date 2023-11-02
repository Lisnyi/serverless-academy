import axios from "axios";

export async function getResponse(endpoint, attempts = 3) {
  try {
    return await axios.get(endpoint);
  } catch (error) {
    if (attempts === 0) {
      throw error;
    }
    attempts--;
    return await getResponse(endpoint, attempts);
  }
}
