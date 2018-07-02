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
    constructor(student,subject, grade) {
        this.student = student;
        this.subject = subject;
        this.grade = grade;
    }

    getExamInfo() {
        return `${this.subject}, ${this.student.getStudentData()}, ${this.grade}`;
    }

    hasPassed() {
        return this.grade > 5;
    }
}

export const store = {    
    studentList:[],
    passedList: [],
    failedList: []
}

export const createStudent = (name, surname) => {
    const createdStudent = new Student(name, surname);
    store.studentList.push(createdStudent);
    return createdStudent;
}

export const createExam = (student, subject, grade) => {
    const createdExam = new Exam(student, subject, grade);
    if(createdExam.grade > 5){
        store.passedList.push(createdExam);
    } else {
        store.failedList.push(createdExam)
    }
    return createdExam;
}

export const calculateFailedPercentage = () => {
    const totalNumOfExams = store.passedList.length + store.failedList.length;
    const numOfFailed = store.failedList.length;

    return parseInt(100*numOfFailed/totalNumOfExams);
}

export const generateCurrentMonth = () => {
    var currentDate = new Date;
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentMonth = monthArray[currentDate.getMonth()];
    return currentMonth;
}


