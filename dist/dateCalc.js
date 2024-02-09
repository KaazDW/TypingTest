"use strict";
function getNow() {
    const now = new Date();
    return now.getTime() + now.getMilliseconds() / 1000;
}
function getToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return (now.getTime() - startOfDay.getTime()) / 1000;
}
function getDaysOfYear() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    return (now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
}
function getYearCompletionPercentage() {
    const daysInYear = 365;
    const completedDays = getDaysOfYear();
    return (completedDays / daysInYear) * 100;
}
function getDaysSinceBirth(birthDate) {
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    return (now.getTime() - birthDate.getTime()) / oneDay;
}
function getAgeSinceBirth(birthDate) {
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const ageInSeconds = (now.getTime() - birthDate.getTime()) / 1000;
    return ageInSeconds / (365.25 * 24 * 60 * 60);
}
function updateData() {
    const birthDate = new Date(2003, 0, 22);
    const today = getToday().toFixed(15);
    const daysOfYear = getDaysOfYear().toFixed(15);
    const completionPercentage = getYearCompletionPercentage().toFixed(15);
    const daysSinceBirth = getDaysSinceBirth(birthDate).toFixed(15);
    // Mise à jour continue de la date de naissance
    birthDate.setDate(birthDate.getDate() + 1);
    const daysSinceLastBirthday = getAgeSinceBirth(birthDate).toFixed(15);
    const todayElement = document.getElementById('today');
    const daysOfYearElement = document.getElementById('daysOfYear');
    const completionPercentageElement = document.getElementById('completionPercentage');
    const daysSinceBirthElement = document.getElementById('daysSinceBirth');
    const ageSinceBirthElement = document.getElementById('ageSinceBirth');
    if (todayElement && daysOfYearElement && completionPercentageElement && daysSinceBirthElement && ageSinceBirthElement && daysSinceLastBirthday) {
        todayElement.textContent = `Today: ${today}`;
        daysOfYearElement.textContent = `Days of the year: ${daysOfYear}`;
        completionPercentageElement.textContent = `Year completion percentage: ${completionPercentage}% completed of ${new Date().getFullYear()}`;
        daysSinceBirthElement.textContent = `Days since birth : ${daysSinceBirth}`;
        ageSinceBirthElement.textContent = `Age since birth : ${daysSinceLastBirthday}`;
    }
}
setInterval(updateData, 10);
