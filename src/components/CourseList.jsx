// components/CourseList.jsx
import React, { useEffect, useState } from "react";
import { getAllCourses, deleteCourse, getCourseById } from "../api";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState("");
  const [fetchedCourse, setFetchedCourse] = useState(null);
  const [deleteId, setDeleteId] = useState("");

  const fetchCourses = async () => {
    const res = await getAllCourses();
    setCourses(res.data);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);
      fetchCourses();
    } catch {
      alert("Can't delete! This course is a prerequisite.");
    }
  };

  const handleFetchCourseById = async () => {
    try {
      const res = await getCourseById(courseId);
      setFetchedCourse(res.data);
    } catch {
      alert("Course not found");
    }
  };

  const handleDeleteById = async () => {
    if (!deleteId) return;
    handleDelete(deleteId);
    setDeleteId("");
  };

  return (
    <div className="box">
      <h2>All Courses</h2>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={fetchCourses}>Fetch All Courses</button>
      </div>

      <ul>
        {courses.map((c) => (
          <li key={c.courseId} className="course-item">
            {c.courseId} - {c.courseTitle}
          </li>
        ))}
      </ul>

      <hr />
      <h3>Fetch Course By ID</h3>
      <input
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <button onClick={handleFetchCourseById}>Fetch Course</button>
      {fetchedCourse && (
        <div>
          <p><strong>Title:</strong> {fetchedCourse.courseTitle}</p>
          <p><strong>Description:</strong> {fetchedCourse.description}</p>
          <p><strong>Prerequisites:</strong></p>
          <ul>
            {fetchedCourse.prerequisites.map((p, i) => (
              <li key={i}>{p.courseId}</li>
            ))}
          </ul>
        </div>
      )}
      <hr />
      <h3>Delete Course By ID</h3>
      <input
        placeholder="Course ID to delete"
        value={deleteId}
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <button onClick={handleDeleteById}>Delete Course</button>
    </div>
  );
}

export default CourseList;
