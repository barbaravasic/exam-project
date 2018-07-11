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
}

export const store = {
    studentList: [],
    passedList: [],
    failedList: [],
}

export const createStudent = (name, surname) => {
    const student = store.studentList.filter(element => {
        return element.name.toLowerCase() === name && element.surname.toLowerCase() === surname
    })
    
    if (student.length !== 0) {
        return student[0];
    } else {
        const studentName = `${name[0].toUpperCase()}${name.slice(1)}`
        const studentSurname = `${surname[0].toUpperCase()}${surname.slice(1)}`
        const createdStudent = new Student(studentName, studentSurname);
        store.studentList.push(createdStudent);
        return createdStudent
    }
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
        return !element.subject.includes(subject) && element.student.name !== name && element.student.surname !== surname;
    })
}

export const removeFromFailed = (content) => {
    const subject = content.split(" ")[0];
    const name = content.split(" ")[1];
    const surname = content.split(" ")[2];
    store.failedList = store.failedList.filter((element) => {
        return !element.subject.includes(subject) && element.student.name !== name && element.student.surname !== surname;
    })
}

export const removeFromStudentList = (content, allExams) => {
    const name = content.split(" ")[1];
    const surname = content.split(" ")[2];

    const studentRepetition = allExams.filter(el => {
        return el.student.name === name && el.student.surname === surname
    })
    const index = store.studentList.indexOf(studentRepetition[0]);

    if (studentRepetition.length > 1) {
        return
    } else {
        store.studentList.splice(index, 1);
    }
}

export const calculateFailedPercentage = (passedList, failedList) => {
    const totalNumOfExams = passedList + failedList;
    const numOfFailed = failedList;
    if(totalNumOfExams !== 0){
        return parseInt(100 * numOfFailed / totalNumOfExams);
    } else {
        return 0
    }
}

export const generateCurrentMonth = () => {
    var currentDate = new Date;
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var currentMonth = monthArray[currentDate.getMonth()];
    return currentMonth;
}

export const isValidName = (name, surname) => {
    if(name && surname) {
        return true
    } else {
        return false
    }
}

export const isValidGrade = (grade) => {
    if(grade && grade >= 5 && grade <= 10) {
        return true
    } else {
        return false
    }
}

