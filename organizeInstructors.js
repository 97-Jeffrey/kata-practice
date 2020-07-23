const organizeInstructors = function (instructors) {
  let organized = {};
  let courseName = '';
  for (let instructor of instructors) {
    courseName = instructor.course;
    let courseArray = [];
    for (let instructor of instructors) {
      if (instructor.course === courseName) {
        courseArray.push(instructor.name);
        organized[courseName]= courseArray;
      }
    }
  }
  return organized;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));