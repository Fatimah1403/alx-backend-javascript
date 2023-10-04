export default function getStudentIdsSum(list) {
  const sum = list.reduce((accumulator, student) => accumulator + student.id, 0);
  return sum;
}
