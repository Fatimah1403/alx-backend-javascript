export default function getStudentsByLocation(list, city) {
  const studentCity = list.filter((object) => object.location === city);
  return studentCity;
}
