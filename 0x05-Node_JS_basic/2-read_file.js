const fs = require("fs");

function countStudents(path) {
   try {
    const students = {};
    const fields = {};
    let length = 0;

    const fileContents = fs.readFileSync(path, "utf-8");
    const dataContent = fileContents.toString().split("\n");

    for (let i = 0; i < dataContent.length; i += 1) {
        if (dataContent[i]) {
            length += 1;
            const field = dataContent[i].toString().split(",");
            if (field[3] in students) {
                students[field[3]].push(field[0]);
            } else {
                students[field[3]] = [field[0]];
            }
            if (field[3] in fields) {
                fields[field[3]] += 1;
            } else {
                fields[field[3]] = 1;
            }
        }
    }
    const l = length - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }

}
countStudents("database.csv");

module.exports = countStudents;