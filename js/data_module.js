class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getStudentData() {
        return `${this.name} ${this.surname}`;
    }

}

class Subject {
    constructor(name) {
        this.name = name;
    }
    getSubjectName() {
        return this.name;
    }

}

class Exam {
    constructor(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    getExamInfo() {
        return `${this.subject.name}, ${this.student.getStudentData()}, ${this.grade}`;
    }

    hasPassed() {
        return this.grade > 5;
    }
}

