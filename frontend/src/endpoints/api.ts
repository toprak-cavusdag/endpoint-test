import axios from "axios";

const BASE_URL = "http://localhost:8000/api"; // Base URL buraya

const endpoints = {
  getData: "/data",
  setData: "/update",
};

const api = {
  getData: async () => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoints.getData}`);
      return response.data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  },

  setData: async () => {
    try {
      const response = await axios.post(`${BASE_URL}${endpoints.setData}`);
      return response.data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  },
};

export default api;
