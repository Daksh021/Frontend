
---

## ✅ Frontend `README.md` (`Internship-Frontend`)

```markdown
# 🖥️ Courses UI – Internship Frontend (IIT Bombay ASC)

A React-based frontend application for managing courses and their delivery instances, created for the internship application assignment by IIT Bombay's Application Software Centre.

---

## 🧪 Tech Stack

- React.js (Vite / CRA)
- Axios
- Bootstrap (or custom CSS)
- Docker + Docker Compose

---

##📘 Course ID Naming Convention
Use department codes followed by numeric codes. Examples:

CS101 → Computer Science

MECH202 → Mechanical Engineering

MATH203 → Mathematics

##📗 Prerequisites Format
Comma-separated list of valid course IDs.

Example:-
CS101, MATH203

##🎓 Course Instance Format
json
Copy
Edit
{
  "year": 2024,
  "semester": 1,
  "courses": {
    "courseId": "CS101"
  }
}


## ✨ Features

- Create course with multiple prerequisites
- View all courses and their dependencies
- Delete course only if not used as a prerequisite
- Add course delivery instances with year & semester
- List and delete course instances
- Visual alerts when deletion is not allowed

---

## 🌍 App URL (Docker Compose)

> http://localhost:3000

---

## 🖼️ UI Highlights

- 🧾 **Course Form**: Dropdown for prerequisites
- 📄 **Course List**: View and delete courses
- 📆 **Instance Section**: Add, view, and delete course deliveries
- 🚫 **Delete Protection**: UI disables delete if course is in use

---

## 🐳 Docker Setup

Run this with the Docker Compose file in the backend repo:

```bash
docker-compose up

##📦frontend
 ┣ 📂components
 ┃ ┣ 📜CourseForm.jsx         # Form to add new courses with prerequisites
 ┃ ┣ 📜CourseList.jsx         # Lists all courses and handles deletion
 ┃ ┗ 📜InstanceSection.jsx    # Handles course delivery instance operations
 ┣ 📜App.js                   # Main app component
 ┣ 📜api.js                   # Axios instance and API methods
 ┣ 📜index.js                 # React entry point
 ┣ 📜index.css                # Global styles
 ┗ 📜Dockerfile               # Dockerfile to build the frontend image


Thank you for reviewing my application — I’m excited at the possibility of growing and contributing at IIT Bombay.
