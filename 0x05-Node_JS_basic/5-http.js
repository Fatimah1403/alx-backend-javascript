const http = require('http');

const fs = require('fs').promises;
const hostname = '127.0.0.1';
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

  const  app = http.createServer((req, res) => {
    const header = {
        'content-type': 'text/plain',
      };
      if (req.url === "/") {
        res.writeHead(200, header);
        res.end("Hello Holberton School!");
      }
      if (req.url === "/students") {
        res.writeHead(200, header);
        res.write("This is the list of our students");
        countStudents(process.argv[2].toString()).then((file) => {
            const outstring = output.slice(0, -1);
            res.end(outstring);
        }).catch(() => {
            res.statusCode = 404;
            res.end('Cannot load the database')
        });
      }
  });

app.listen(port, hostname, () => {
});
  module.exports = app;