let courses = [];

function addCourse() {
    let name = document.getElementById('courseName').value;
    let code = document.getElementById('courseCode').value;
    courses.push({ name: name, code: code, students: [] });
    displayCourses();
    clearFields('courseName', 'courseCode'); 
}

function enrollStudent() {
    let code = document.getElementById('courseCodeForEnroll').value;
    let student = document.getElementById('studentName').value;
    let course = courses.find(c => c.code === code);
    if (course) {
        course.students.push(student);
        displayCourses();
        clearFields('courseCodeForEnroll', 'studentName'); 
    } else {
        alert("Course not found!");
    }
}

function displayCourses() {
    let courseList = document.getElementById('courseList');
    courseList.innerHTML = '';
    courses.forEach(course => {
        courseList.innerHTML += `<p>${course.name} (Code: ${course.code}) - ${course.students.length} students</p>`;
    });
}

function clearFields(...ids) {
    ids.forEach(id => {
        document.getElementById(id).value = '';
    });
}
