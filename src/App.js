import React from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import InstanceSection from "./components/InstanceSection";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <CourseForm />
      <CourseList />
      <InstanceSection />
    </div>
  );
}

export default App;
