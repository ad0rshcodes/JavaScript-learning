const user = {
  nameUser: "adarsh",
  lastName: "Sharma",
  rollNo: "56",
  age: 16,
  height: 160,
  getUserName: function () {
    console.log(`${nameUser}, ${lastName}`);
  },
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  // getCourseCount: this.courseList.length, // Why is there a bug here.
  getCourseCount: function () {
    console.log(`you have a total of ${this.courseList.length} courses`);
  },
};

console.log(user);
console.table(user);

console.log(user.getCourseCount());

// console.log(user);
