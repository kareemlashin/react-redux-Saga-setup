import axios from "axios";

export const getTasks = async () => {
  return await axios.get(`/tasks`);
};

export const getTask = async (slug) => {
  return await axios.get(`/task/${slug}`);
};

export const removeTask = async (slug) => {
  return await axios.delete(`/task/${slug}`);
};

export const updateTask = async (slug, task) => {
  return await axios.put(`/task/${slug}`, task);
};

export const createTask = async (task) => {
  return await axios.post(`/task/create`, task);
};