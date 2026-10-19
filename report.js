export default function withStatus(students) {
    const updatedStudents = [];
    for (const student of students) {
        const newStudent = { ...student };
        if (newStudent.grade >= 56) {
            newStudent.status = "pass";
        } else {
            newStudent.status = "fail";
        }
        updatedStudents.push(newStudent);
    }
    return updatedStudents;
}