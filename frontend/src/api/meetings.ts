import axios from "axios";

const API_URL =
  "http://127.0.0.1:8000/api/v1";

export async function getMeetings() {
  const response = await axios.get(
    `${API_URL}/meetings`
  );

  return response.data;
}

export async function createMeeting(
  meeting: any
) {
  const response = await axios.post(
    `${API_URL}/meetings`,
    meeting
  );

  return response.data;
}

export async function completeMeeting(
  meetingId: number
) {
  const response = await axios.patch(
    `${API_URL}/meetings/${meetingId}/complete`
  );

  return response.data;
}

export async function deleteMeeting(
  meetingId: number
) {
  const response = await axios.delete(
    `${API_URL}/meetings/${meetingId}`
  );

  return response.data;
}