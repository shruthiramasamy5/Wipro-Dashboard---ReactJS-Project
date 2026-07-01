# Wipro Employee Dashboard

A simple React dashboard UI displaying an employee's profile, current project assignments, and team notices — built with functional components and plain CSS.

## Features
- Personalized greeting header
- Employee Profile card (Name, Employee ID, Department)
- Current Projects list
- Team Notices with alert-style highlighting
- Footer with contact info

## Project Structure
src/
├── App.jsx                    → Root component, composes the dashboard layout
├── App.css                    → Global styles (layout, cards, typography)
├── index.css                  → Base reset styles
└── component/
├── EmployeeProfile.jsx    → Displays employee name, ID, department
├── CurrentProjects.jsx    → Lists active project assignments
└── TeamNotices.jsx        → Displays team announcements/alerts

## Tech Stack
- React (functional components)
- Plain CSS (no framework)

## How to Run
1. Clone the repository
git clone <repo-url>
2. Install dependencies
npm install
3. Start the development server
npm start
4. Open in browser
http://localhost:3000

## Components
| Component | Purpose |
|-----------|---------|
| `EmployeeProfile` | Shows Name, Employee ID, and Department |
| `CurrentProjects` | Displays a list of ongoing project assignments |
| `TeamNotices` | Highlights upcoming meetings/announcements |

## Author
Shruthika R — 717824Y150
