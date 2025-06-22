
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
