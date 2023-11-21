const fs = require('fs').promises;

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

    console.log(`Number of students: ${lines.length - 1}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
