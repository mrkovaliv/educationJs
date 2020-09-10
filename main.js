'use strict';

let money = +prompt("Ваш бюджет на месяц", 1000);
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-09-10");
let q1 = prompt("Введите обязательную статью расходов в этом месяце", "5");
let q2 = prompt("Во сколько обойдется?", "2020");
let appData = {
    budjet: money,
    timeData: time,
    expences: {
        [q1]: q2

    },
    optionalExpenses: {},
    income: [],
    savings: false

};
alert(appData.budjet/30);
alert(appData.expences[q1]);

