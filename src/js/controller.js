import * as ui from './ui_module.js';
import * as data from './data_module.js';

const addExamHandler = () => {
    const collectedInputs = ui.collectInputs();
    if(!data.isValidName(collectedInputs.name, collectedInputs.surname)){
        ui.removeGradeValidation();        
        ui.displayNameInputError();
        
    } else if(!data.isValidGrade(collectedInputs.grade)){
        ui.removeNameValidation();        
        ui.displayGradeError();
    } else {
        ui.removeNameValidation();
        ui.removeGradeValidation();
        const createdStudent = data.createStudent(collectedInputs.name, collectedInputs.surname);
        const createdExam = data.createExam(createdStudent, collectedInputs.chosenSubject, collectedInputs.grade);
        ui.clearInputs();
        if (createdExam.grade > 5) {
            ui.displayPassed(data.store.passedList)
        } else {
            ui.displayFailed(data.store.failedList)
        }
        ui.displayPassedFailedCount(data.store.passedList.length, data.store.failedList.length, data.calculateFailedPercentage)
        ui.displayStudentsCount(data.store.studentList.length)
    }
}

const removeItemHandler = (event) => {
    event.preventDefault();
    const chosenItemId = event.target.parentElement.parentElement.id;
    const content = event.target.parentElement.parentElement.textContent;
    const allExams = [...data.store.failedList, ...data.store.passedList];
    if (event.target.className === "btn-x") {
        $(`#${chosenItemId}`).remove();
        const index = parseFloat(chosenItemId)
        if(chosenItemId.includes('passed')) {
            data.removeFromPassed(content);
            data.removeFromStudentList(content, allExams);
            ui.displayStudentsCount(data.store.studentList.length);
        } else {
            data.removeFromFailed(content);
            data.removeFromStudentList(content, allExams);
            ui.displayStudentsCount(data.store.studentList.length);
        }
    ui.displayPassedFailedCount(data.store.passedList.length, data.store.failedList.length, data.calculateFailedPercentage)        
    }
    
}

export const init = () => {
    ui.displayCurrentMonth(data.generateCurrentMonth);
    const $addBtn = $(ui.DOMSelectors.btnAdd);
    $addBtn.on("click", addExamHandler);
    const $btnX = $(".btn-x")
    $("body").on("click", removeItemHandler)
}