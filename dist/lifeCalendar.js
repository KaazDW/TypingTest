"use strict";
function monthsBetween(date1, date2) {
    const diff = date2.getTime() - date1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
}
function generateLifeCalendar(totalMonths, howManyMonthsSinceBirth) {
    const lifeCalendarDom = document.getElementById('life-calendar');
    if (lifeCalendarDom) {
        const rows = 12;
        const cols = Math.ceil(totalMonths / rows);
        lifeCalendarDom.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        lifeCalendarDom.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        for (let i = 0; i < cols; i++) {
            const groupDiv = document.createElement('div');
            groupDiv.classList.add('month-group');
            for (let j = 0; j < rows; j++) {
                const monthDiv = document.createElement('div');
                monthDiv.classList.add('month');
                const monthIndex = i * rows + j;
                if (monthIndex < totalMonths) {
                    if (monthIndex < howManyMonthsSinceBirth) {
                        monthDiv.classList.add('lived');
                    }
                }
                groupDiv.appendChild(monthDiv);
            }
            lifeCalendarDom.appendChild(groupDiv);
        }
    }
}
// TODO: getPercentLifeLived function
let liveDuration = 90;
const birthDate = new Date('2002-11-22');
const currentDate = new Date();
const totalMonths = 12 * liveDuration;
const howManyMonthsSinceBirth = monthsBetween(birthDate, currentDate);
console.log(currentDate, ": currentDate");
console.log(birthDate, ": birthDate");
console.log(birthDate.getFullYear());
console.log(howManyMonthsSinceBirth, ": howManyMonths");
console.log(totalMonths, ": totalMonths");
generateLifeCalendar(totalMonths, howManyMonthsSinceBirth);
