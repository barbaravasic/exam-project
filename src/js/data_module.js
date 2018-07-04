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
    const student = store.studentList.find(element => element.name === name && element.surname === surname)
    if (student) {
        return student;
    } else {
        const createdStudent = new Student(name, surname);
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
    console.log(store.studentList);
    // const element = store.studentList.filter(el => {
    //     return el.name === name && el.surname === surname;
    // })[0]
    
    const studentRepetition = allExams.filter(el => {
        return el.student.name === name && el.student.surname === surname
    })
    const index = store.studentList.indexOf(studentRepetition[0]);

    if (studentRepetition.length > 1) {
        return
    } else {
        store.studentList.splice(index, 1);
    }

    console.log(studentRepetition);

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


