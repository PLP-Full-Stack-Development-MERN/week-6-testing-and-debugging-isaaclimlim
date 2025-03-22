# MERN Bug Tracker

## Project Overview
The **MERN Bug Tracker** is a full-stack web application that allows users to report, track, update, and delete bugs in a project. It is built using the MERN stack (MongoDB, Express, React, Node.js) with integrated testing and debugging best practices.

## Features
- Report new bugs via a form.
- View a list of all reported bugs.
- Update bug statuses (open, in-progress, resolved).
- Delete bugs from the list.
- Backend error handling and frontend error boundaries.

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (latest LTS version recommended)
- **MongoDB** (local or cloud-based instance)
- **npm** or **yarn**

### Clone the Repository
```sh
git clone https://github.com/PLP-Full-Stack-Development-MERN/week-6-testing-and-debugging-isaaclimlim.git
cd mern-bug-tracker
```

### Backend Setup
```sh
cd backend
npm install
```

#### Environment Variables
Create a `.env` file in the `backend` folder and add:
```
MONGO_URI=mongodb://localhost:27017/bugtracker
PORT=5000
```

#### Start the Backend Server
```sh
npm install
npm run dev
```

### Frontend Setup
```sh
cd ../frontend
npm install
```

#### Start the Frontend Development Server
```sh
npm run dev
```
The application will be available at `http://localhost:5000`.

## Running Tests
### Backend Tests
To run unit and integration tests for the backend:
```sh
cd backend
npm test
```
Tests include:
- Unit tests for helper functions.
- Integration tests for API routes using **Jest** and **Supertest**.
- Mocking database calls using `jest-mock`.

### Frontend Tests
To run React component tests:
```sh
cd frontend
npm test
```
Tests include:
- Unit tests for components (form validation, button clicks).
- Integration tests for API calls and UI updates using **React Testing Library**.

## Debugging Techniques Used
### Backend Debugging
- **Console Logs**: Used to track request processing.
- **Node.js Inspector**: Debug server-side issues using Chrome DevTools.
- **Express Middleware**: Handles errors and logs useful debugging information.

### Frontend Debugging
- **Chrome DevTools**: Used to inspect UI components and network requests.
- **React Error Boundaries**: Captures errors to prevent UI crashes.
- **Console Warnings & Logs**: Identifies incorrect prop types, state updates, and API call issues.

## Testing Approach and Coverage
The project follows a **Test-Driven Development (TDD)** approach:
- **Unit Testing**: Individual functions and components are tested in isolation