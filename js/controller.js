import * as ui from './ui_module.js';
import * as data from './data_module.js';

const addExamHandler = () => {
   const collectedInputs = ui.collectInputs();
   const createdStudent = data.createStudent(collectedInputs.name, collectedInputs.surname);
   const createdExam = data.createExam(createdStudent, collectedInputs.chosenSubject, collectedInputs.grade);
   if(createdExam.grade > 5){
       ui.displayPassed(data.store.passedList)
   } else {
       ui.displayFailed(data.store.failedList)
   }

}

export const init = () => {
    const $addBtn = $(ui.DOMSelectors.btnAdd);
    $addBtn.on("click", addExamHandler);
}