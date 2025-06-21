// lib/api.js
import axios from 'axios';

export const fetchDocuments = async (params) => {
  const response = await axios.get('/api/search', { params });
  return response.data;
};
