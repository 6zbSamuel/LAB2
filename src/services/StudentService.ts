// src/services/StudentService.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/6zbSamuel/LAB2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getStudents() {
    return apiClient.get('/students');
  }
}
