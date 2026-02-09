import apiURL from "../API/apiURL";

export const verifyLogin = async (): Promise<boolean> => {
  const res = await fetch(`${apiURL}/auth/check_session`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) return false;
  const data = await res.json();
  return data.logged_in === true;
};