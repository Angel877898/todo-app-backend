# Todo App Backend

This is the backend part of the Todo App built with Node.js and Express. The backend includes a RESTful API for managing tasks and collecting metrics for CRUD operations. The database used is MongoDB with Mongoose.

## Project Setup

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (v6 or higher recommended)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add your MongoDB connection string:**

   ```
   MONGODB_URI=mongodb://localhost:27017/todoapp
   ```

### Running the Server

To start the server, run:

```bash
npm start
```

### API Endpoints

The following API endpoints are available:

- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Create a new task.
- **PUT /api/tasks/:id**: Update an existing task by ID.
- **DELETE /api/tasks/:id**: Delete a task by ID.

### Metrics Collection

Each time a task is created, updated, or deleted, a metric is recorded in the `metrics` collection. The metric includes the task ID, the operation performed (`create`, `update`, or `delete`), and a timestamp.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

