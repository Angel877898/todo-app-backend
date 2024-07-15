const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Conect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
