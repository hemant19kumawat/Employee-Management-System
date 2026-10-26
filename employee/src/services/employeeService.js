import api from "./api";


export const getEmployees = () => {
  return api.get("/api/v1/getallemployee");
};


export const getEmployee = (id) => {
  return api.get(`/api/v1/getemployee/${id}`);
};


export const createEmployee = (data) => {
  return api.post("/api/v1/createemployee", data);
};


export const updateEmployee = (id, data) => {
  return api.put(`/api/v1/updateemployee/${id}`, data);
};


export const deleteEmployee = (id) => {
  return api.delete(`/api/v1/deleteemployee/${id}`);
};