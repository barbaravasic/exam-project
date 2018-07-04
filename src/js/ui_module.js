export const DOMSelectors = {
    btnAdd: "#add-button",
    chooseSubject: "#choose-subject",
    nameInput: ".name-input",
    gradeInput: ".grade-input",
    ulPassed: "#passed-student-list",
    ulFailed: "#failed-student-list",
    passedCount: "#passed-count",
    failedCount: "#failed-count",
    failedPercent: "#failed-percent",
    statisticDate:"#statistic-date",
    studentsCount:"#students-count",
    nameValidation: ".nameValidation",
    gradeValidation: ".gradeValidation"
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

export const clearInputs = () => {
    const nameSurname = $(DOMSelectors.nameInput).val("");
    const grade = $(DOMSelectors.gradeInput).val("");
}

export const displayCurrentMonth = (month) => {  
    $(DOMSelectors.statisticDate).text(month());
}

export const displayStudentsCount = (numOfStudents) => {
    $(DOMSelectors.studentsCount).text(numOfStudents)
}

export const displayPassed = (passedExamList) => {
    const $ulPassed = $('<ul id="passed-student-list">');
    const $prevUl = $(DOMSelectors.ulPassed);
    const $passedListItems = passedExamList.map((exam, i) => {
        const spanLi = $("<span class='span-li'>").text(exam.getExamInfo())
        const gradeDisplay = $("<span class='grade-span'>").text(` ${exam.grade}`)
        const btnX = $(`<button class='btn-x' id='${i}passed'>`).text("X");
        const div = $("<div class='span-container'>").append(gradeDisplay).append(btnX)
        return $(`<li id='${i}passedLi'>`).append(spanLi).append(div)
    });
    $ulPassed.append($passedListItems);
    $prevUl.replaceWith($ulPassed)
}

export const displayFailed = (failedExamList) => {
    const $ulFailed = $('<ul id="failed-student-list">');
    const $prevUl = $(DOMSelectors.ulFailed);    
    const $failedListItems = failedExamList.map((exam, i) => {
        const spanLi = $("<span class='span-li'>").text(exam.getExamInfo())
        const gradeDisplay = $("<span class='grade-span'>").text(` ${exam.grade}`)
        const btnX = $(`<button class='btn-x' id='${i}failed'>`).text("X");
        const div = $("<div class='span-container'>").append(gradeDisplay).append(btnX);
        return $(`<li id='${i}failedLi'>`).append(spanLi).append(div);
        
    });
    $ulFailed.append($failedListItems);
    $prevUl.replaceWith($ulFailed)
}

export const displayPassedFailedCount = (numOfPassed, numOfFailed, percentOfFailed) => {
    const $passedCountNew = $("<p id='passed-count'>").text(numOfPassed);
    const $passedCount = $(DOMSelectors.passedCount).replaceWith($passedCountNew);
    const $failedCountNew = $("<p id='failed-count'>").text(numOfFailed);
    const $failedCount = $(DOMSelectors.failedCount).replaceWith($failedCountNew);
    const $failedPercentNew = $("<p id='failed-percent'>").text(`${percentOfFailed(numOfPassed, numOfFailed)}%`);
    const $failedPercent = $(DOMSelectors.failedPercent).replaceWith($failedPercentNew);
}

export const displayNameInputError = () => {
    const $nameValidationMessage = $(DOMSelectors.nameValidation);
    $nameValidationMessage.text("You must insert both name and surname!");
}

export const displayGradeError = () => {
    const $gradeValidationMessage = $(DOMSelectors.gradeValidation);
    $gradeValidationMessage.text("Grade can only be from 5 to 10!");
}

export const removeNameValidation = () => {
    const $nameValidationMessage = $(DOMSelectors.nameValidation);
    $nameValidationMessage.text("");
}
export const removeGradeValidation = () => {
    const $gradeValidationMessage = $(DOMSelectors.gradeValidation);
    $gradeValidationMessage.text("");
}
