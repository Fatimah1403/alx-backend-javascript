interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
  const student1: Student = {
    firstName: Fatimah,
    lastName: Hassan,
    age: 34,
    location: New York,
  };

  const student2: Student = {
    firstName: Fauzat,
    lastName: Ayanda
    age: 50,
    location: Los Angeles,
  };

  const studentsList = [student1, student2];

  const table = document.getElementById('studentTable') as HTMLTableElement;

    studentsList.forEach((student) => {
       const row = table.insertRow();
       const firstNameCell = row.insertCell[0];
       const locationCell = row.insertCell[1];

       firstNameCell.innerHtml = student.firstName;
       locationCell.innerHtml = student.location;
    });
      
