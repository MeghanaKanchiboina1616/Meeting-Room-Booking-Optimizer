import api from "./axios";

export const getMeetings = async () => {
  const response = await api.get("/meetings");
  return response.data;
};

export const createMeeting = async (data: any) => {
  const response = await api.post("/meetings", data);
  return response.data;
};