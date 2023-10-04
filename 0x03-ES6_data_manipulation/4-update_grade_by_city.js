export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentCity = list.filter((student) => student.location === city);
  const updateStuGrades = studentCity.map((student) => {
    const gradeObj = newGrades.find(grades => grades.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
  return updateStuGrades;
}
