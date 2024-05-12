export default function getStudentIdsSum(ListStudents) {
  const sum = ListStudents.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.id;
  }, 0);
  return sum;
}
