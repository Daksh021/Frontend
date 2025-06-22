// src/api.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// Courses
export const createCourse = async (data) => await axios.post(`${BASE_URL}/courses`, data);
export const getAllCourses = async () => await axios.get(`${BASE_URL}/courses`);
export const getCourseById = async (id) => await axios.get(`${BASE_URL}/courses/${id}`);
export const deleteCourse = async (id) => await axios.delete(`${BASE_URL}/courses/${id}`);

// Instances
export const createInstance = async (data) => await axios.post(`${BASE_URL}/instances`, data);
export const viewInstanceCourse = async (year, sem, id) =>
  await axios.get(`${BASE_URL}/instances/${year}/${sem}/${id}`);
export const deleteInstance = async (year, sem, id) =>
  await axios.delete(`${BASE_URL}/instances/${year}/${sem}/${id}`);

// New API: Get course titles by year and semester
export const getCourseTitlesByYearSemester = async (year, sem) =>
  await axios.get(`${BASE_URL}/instances/${year}/${sem}`);
