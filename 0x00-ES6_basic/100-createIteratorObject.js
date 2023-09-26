export default function createIteratorObject(report) {
  const myarray = [];
  for (const item of object.values(report.allEmployees)) {
    myarray.push(...item);
  }

  return myarray;
}
