import api from "./axios";

export const optimizeSchedule = async () => {
  const response = await api.post("/optimize");
  return response.data;
};