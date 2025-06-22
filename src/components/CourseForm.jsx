import React, { useState } from "react";
import { createCourse } from "../api";

function CourseForm() {
  const [form, setForm] = useState({
    courseId: "",
    courseTitle: "",
    description: "",
    prerequisites: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const prereqArray = form.prerequisites
      .split(",")
      .map((id) => id.trim())
      .filter((id) => id)
      .map((id) => ({ courseId: id }));

    const payload = {
      courseId: form.courseId,
      courseTitle: form.courseTitle,
      description: form.description,
      prerequisites: prereqArray
    };

    try {
      await createCourse(payload);
      alert("Course inserted!");

      // Clear form fields after submission
      setForm({
        courseId: "",
        courseTitle: "",
        description: "",
        prerequisites: ""
      });
    } catch {
      alert("Error! Check if prerequisites exist.");
    }
  };

  return (
    <div className="box">
      <h2>Create Course</h2>
      <input
        placeholder="Course ID"
        name="courseId"
        value={form.courseId}
        onChange={handleChange}
      />
      <input
        placeholder="Title"
        name="courseTitle"
        value={form.courseTitle}
        onChange={handleChange}
      />
      <input
        placeholder="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <input
        placeholder="Prerequisites (comma-separated IDs)"
        name="prerequisites"
        value={form.prerequisites}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CourseForm;
