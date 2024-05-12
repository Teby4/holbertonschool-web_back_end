export default function getStudentIdsSum(ListStudents) {
  const sum = ListStudents.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return sum;
}
