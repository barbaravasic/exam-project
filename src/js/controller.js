import * as ui from './ui_module.js';
import * as data from './data_module.js';

const addExamHandler = () => {
    const collectedInputs = ui.collectInputs();
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

const removeItemHandler = (event) => {
    event.preventDefault();
    const chosenItemId = event.target.parentElement.parentElement.id
    if (event.target.className === "btn-x") {
        $(`#${chosenItemId}`).remove();
        const index = parseFloat(chosenItemId)
        console.log(data.removeFromPassed(index).length);
        ui.displayPassedFailedCount(data.removeFromPassed(index).length, data.removeFromFailed(index).length, data.calculateFailedPercentage)
    }
    
}

export const init = () => {
    ui.displayCurrentMonth(data.generateCurrentMonth);
    const $addBtn = $(ui.DOMSelectors.btnAdd);
    $addBtn.on("click", addExamHandler);
    const $btnX = $(".btn-x")
    $("body").on("click", removeItemHandler)
}