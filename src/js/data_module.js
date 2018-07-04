class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getStudentData() {
        return `${this.name} ${this.surname}`;
    }

}

class Exam {
    constructor(student, subject, grade) {
        this.student = student;
        this.subject = subject;
        this.grade = grade;
    }

    getExamInfo() {
        return `${this.subject}, ${this.student.getStudentData()}`;
    }

    hasPassed() {
        return this.grade > 5;
    }
}

export const store = {
    studentList: [],
    passedList: [],
    failedList: [],
}

export const createStudent = (name, surname) => {
    const createdStudent = new Student(name, surname);
}

export const createExam = (student, subject, grade) => {
    const createdExam = new Exam(student, subject, grade);
    if (createdExam.grade > 5) {
        store.passedList.push(createdExam);
    } else {
        store.failedList.push(createdExam)
    }
    return createdExam;
}

export const removeFromPassed = (content) => {
    const subject = content.split(" ")[0];
    const name = content.split(" ")[1];
    const surname = content.split(" ")[2];
    store.passedList = store.passedList.filter((element) => {
        return !element.subject.includes(subject) && !element.student.name.includes(name) && !element.student.surname.includes(surname);
    })
}

export const removeFromFailed = (content) => {
    const subject = content.split(" ")[0];
    const name = content.split(" ")[1];
    const surname = content.split(" ")[2];
    store.failedList = store.failedList.filter((element) => {
        return !element.subject.includes(subject) && !element.student.name.includes(name) && !element.student.surname.includes(surname);
    })
}

export const calculateFailedPercentage = (passedList, failedList) => {
    const totalNumOfExams = passedList + failedList;
    const numOfFailed = failedList;

    return parseInt(100 * numOfFailed / totalNumOfExams);
}

export const generateCurrentMonth = () => {
    var currentDate = new Date;
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentMonth = monthArray[currentDate.getMonth()];
    return currentMonth;
}


