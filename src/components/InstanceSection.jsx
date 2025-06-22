// components/InstanceSection.jsx
import React, { useState } from "react";
import {
  createInstance,
  viewInstanceCourse,
  deleteInstance,
  getCourseTitlesByYearSemester,
} from "../api";

function InstanceSection() {
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseInfo, setCourseInfo] = useState(null);
  const [titles, setTitles] = useState([]);
  const [titleYear, setTitleYear] = useState("");
  const [titleSemester, setTitleSemester] = useState("");

  const handleCreate = async () => {
    try {
      await createInstance({ year, semester, courses: { courseId } });
      alert("Instance created!");
      setYear("");
      setSemester("");
      setCourseId("");
    } catch {
      alert("Error creating instance");
    }
  };

  const handleViewCourse = async () => {
    setCourseInfo(null); // Clear previous result
    try {
      const res = await viewInstanceCourse(year, semester, courseId);
      setCourseInfo(res.data);
    } catch {
      alert("Error viewing course");
    }
  };

  const handleDeleteInstance = async () => {
    try {
      await deleteInstance(year, semester, courseId);
      alert("Instance deleted!");
    } catch {
      alert("Error deleting instance");
    }
  };

  const handleFetchTitles = async () => {
    setTitles([]); // Clear previous titles before fetching
    try {
      const res = await getCourseTitlesByYearSemester(titleYear, titleSemester);
      setTitles(res.data);
    } catch {
      alert("Failed to fetch course titles");
    }
    setTitleYear("");
    setTitleSemester("");
  };

  return (
    <div className="box">
      <h2>Course Instance Management</h2>
      <input
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        placeholder="Semester"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      />
      <input
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />

      <button onClick={handleCreate}>Create Instance</button>
      <button onClick={handleViewCourse}>View Course</button>
      <button onClick={handleDeleteInstance}>Delete Instance</button>

      {courseInfo && (
        <div>
          <h4>Course Info</h4>
          <p><strong>Title:</strong> {courseInfo.courseTitle}</p>
          <p><strong>Description:</strong> {courseInfo.description}</p>
          <p><strong>Prerequisites:</strong></p>
          <ul>
            {courseInfo.prerequisites.map((p, i) => (
              <li key={i}>{p.courseId}</li>
            ))}
          </ul>
        </div>
      )}

      <hr />
      <h3>Fetch Course Titles by Year & Semester</h3>
      <input
        placeholder="Year"
        value={titleYear}
        onChange={(e) => setTitleYear(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <input
        placeholder="Semester"
        value={titleSemester}
        onChange={(e) => setTitleSemester(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <button onClick={handleFetchTitles}>Fetch Titles</button>
      {titles.length > 0 && (
        <ul>
          {titles.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InstanceSection;
