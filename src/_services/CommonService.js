import api from "./api";
export const GetTeamMembers = async (uid) => {
  try {
    const response = await api.get(`/Common/getTeamMembers?uid=${uid}`);
    const userData = response.data;
    return userData;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};
