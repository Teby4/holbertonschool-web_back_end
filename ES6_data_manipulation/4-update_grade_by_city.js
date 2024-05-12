export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  // Filter students based on the provided city
  const studentsCity = listStudents.filter(student => student.location === city);

  const updatedStudents = studentsCity.map(student => {
    const studentGrade = newGrades.find(grade => grade.studentId === student.id);
    const grade = studentGrade ? studentGrade.grade : 'N/A';
    return { ...student, grade };
  });

  return updatedStudents;
}