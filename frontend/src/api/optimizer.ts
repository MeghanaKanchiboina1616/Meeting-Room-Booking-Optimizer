import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1";

export async function optimizeSchedule() {
  const response = await axios.post(`${API_URL}/optimize`);
  return response.data;
}