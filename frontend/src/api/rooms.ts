import axios from "axios";

const API_URL =
  "http://127.0.0.1:8000/api/v1";

export const getRooms = async () => {
  const res = await axios.get(
    `${API_URL}/rooms`
  );

  return res.data;
};

export const enableRoom = async (
  id: number
) => {
  const res = await axios.patch(
    `${API_URL}/rooms/${id}/enable`
  );

  return res.data;
};

export const disableRoom = async (
  id: number
) => {
  const res = await axios.patch(
    `${API_URL}/rooms/${id}/disable`
  );

  return res.data;
};

export const deleteRoom = async (
  id: number
) => {
  const res = await axios.delete(
    `${API_URL}/rooms/${id}`
  );

  return res.data;
};