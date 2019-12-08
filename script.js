'use strict';

let money, time;

function start() { // 
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() { // Записывает обязательную статью расхода в объект expenses
    for (let i = 0; i < 2; i++) {
        let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
            question2 = +prompt("Во сколько обойдется?", "");

        if ((typeof (question1)) === 'string' && (typeof (question1)) != null &&
            (typeof (question2)) != null && question1 != "" && question2 != "" &&
            question1.length < 50) {
            console.log("Введённые данные соответствуют");
            appData.expenses[question1] = question2;
        } else {
            console.log("Введённые данные не соответствуют попробуйте ещё раз");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() { // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() { // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() { // Расчёт дохода с депозита в месяц
    if (appData.savings == true) {
        let save = +prompt("Кааова сумма накоплений?"),
            persent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * persent;
        alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() { // Функция для определения необязательных расходов
    for (let i = 1; i <= 3; i++) {
        let questionExpenses = prompt("Статья необязательных расходов ?");
        appData.optionalExpenses[i] = questionExpenses;
        console.log("Необязательные вопросы заданы");
    }
}
chooseOptExpenses();

//===============================================================================
// Цикл WHILE
//===============================================================================
//
// let i = 0;
// while (i < 2) {
//     let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         question2 = prompt("Во сколько обойдется?", "");

//     if ((typeof (question1)) === 'string' && (typeof (question1)) != null &&
//         (typeof (question2)) != null && question1 != "" && question2 != "" &&
//         question1.length < 50) {
//         console.log("Введённые данные соответствуют");
//         appData.expenses[question1] = question2;
//     } else {
//         console.log("Введённые данные не соответствуют попробуйте ещё раз");
//         i--;
//     }
//     i++;
// };

// appData.moneyPerDay = appData.budget / 30;
// alert("Ежедневный бюджет: " + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log("Минимальный уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний достаток");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Достаток Выше среднего");
// } else {
//     console.log("Произошла ошибка");
// };

//=======================================================================================
// Цикл DO
//=======================================================================================

// let i = 0;
// do {
//     let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         question2 = prompt("Во сколько обойдется?", "");

//     if ((typeof (question1)) === 'string' && (typeof (question1)) != null &&
//         (typeof (question2)) != null && question1 != "" && question2 != "" &&
//         question1.length < 50) {
//         console.log("Введённые данные соответствуют");
//         appData.expenses[question1] = question2;
//     } else {
//         console.log("Введённые данные не соответствуют попробуйте ещё раз");
//         i--;
//     }
//     i++;
// }
// while (i < 2);

// appData.moneyPerDay = appData.budget / 30;
// alert("Ежедневный бюджет: " + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log("Минимальный уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний достаток");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Достаток Выше среднего");
// } else {
//     console.log("Произошла ошибка");
// };

// Ответы на вопросы
// 1)в JS существует 7 типов данных
// 2)При помощи console.log() в скобках 
// указать информацию которую надо вывести
// || - оператор "или" выдаёт true если один из двух операндов правда  
// && - оператор "и" выдает true если оба операнда правда