// 7-http_express.js

const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(fileName) {
  try {
    const students = {};
    const fields = {};

    const fileContents = await fs.readFile(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        const field = line.split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }

    let result = (`Number of students: ${lines.length - 1}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        result += (`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Define a route for the endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the endpoint '/students'
app.get('/students', async (req, res) => {
  res.send('This is the list of our students\n');
  try {
    const data = await countStudents(req.query.database);
    res.send(data);
  } catch (err) {
    res.send('Cannot load the database');
  }
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
