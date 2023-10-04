export default function getStudentIdsSum(list) {
  const sum = list.reduce((accumulator, student) => accumulator + student.id);
  return sum;
}
