import api from "./api";

export const signup = (data) => {
  return api.post("/api/v2/signup", data);
};

export const login = (data) => {
  return api.post("/api/v2/login", data);
};

export const logout = () => {
  return api.get("/api/v2/logout");
};

export const getProfile = ()=>{
  return api.get("/api/v2/profile")
}