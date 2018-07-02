export const DOMSelectors = {
    btnAdd: "#add-button",
    chooseSubject: "#choose-subject",
    nameInput: ".name-input",
    gradeInput: ".grade-input",
    ulPassed: "#passed-student-list",
    ulFailed: "#failed-student-list"
}

export const collectInputs = () => {
    const chosenSubject = $(DOMSelectors.chooseSubject).val();
    const nameSurname = $(DOMSelectors.nameInput).val();
    const name = nameSurname.split(" ")[0];
    const surname = nameSurname.split(" ")[1];
    const grade = $(DOMSelectors.gradeInput).val();

    return {
        chosenSubject,
        name,
        surname,
        grade
    }
}

export const displayPassed = (passedExamList) => {
    const $ulPassed = $('<ul id="passed-student-list">');
    const $prevUl = $(DOMSelectors.ulPassed);
    const $passedListItems = passedExamList.map(exam => {
        return $("<li>").text(exam.getExamInfo());
    });
    $ulPassed.append($passedListItems);
    $prevUl.replaceWith($ulPassed)
}

export const displayFailed = (failedExamList) => {
    const $ulFailed = $('<ul id="failed-student-list">');
    const $prevUl = $(DOMSelectors.ulFailed);    
    const $failedListItems = failedExamList.map(exam => {
        return $("<li>").text(exam.getExamInfo());
    });
    $ulFailed.append($failedListItems);
    $prevUl.replaceWith($ulFailed)
}