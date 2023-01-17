const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

function findPerson(type, id1) {
  if (type === "teachers") {
    let result = school.teachers.find((person) => {
      return person.id.toString().includes(id1);
    });
    console.log(result);
  } else {
    let result = school.students.find((person) => {
      return person.id.toString().includes(id1);
    });
    console.log(result);
  }
}
findPerson("students", 12);

function assignStudent(id1, subject) {
  let moveStudent = school.students.find((person) => {
    return person.id.toString().includes(id1);
  });
  console.log(moveStudent);
  let availTeacher = school.teachers.find((teacher) => {
    return teacher.subjects.includes(subject);
  });
  console.log(availTeacher);
  if (availTeacher.capacityLeft > 0) {
    availTeacher.students.push(moveStudent);
    availTeacher.capacityLeft--;
  } else {
    console.log("sorry");
  }
  console.log(availTeacher);
}
assignStudent("10", "chemistry");

function assignTeachersSubject(id2, newSubject) {
    let result = school.teachers.find((person) => {
        return person.id.toString().includes(id1);
      });
}
