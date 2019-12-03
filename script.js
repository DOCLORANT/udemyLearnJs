'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
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
let i = 0;
do {
    let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        question2 = prompt("Во сколько обойдется?", "");

    if ((typeof (question1)) === 'string' && (typeof (question1)) != null &&
        (typeof (question2)) != null && question1 != "" && question2 != "" &&
        question1.length < 50) {
        console.log("Введённые данные соответствуют");
        appData.expenses[question1] = question2;
    } else {
        console.log("Введённые данные не соответствуют попробуйте ещё раз");
        i--;
    }
    i++;
}
while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний достаток");
} else if (appData.moneyPerDay > 2000) {
    console.log("Достаток Выше среднего");
} else {
    console.log("Произошла ошибка");
};

// for (let i = 0; i < 2; i++) {
//     let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         question2 = +prompt("Во сколько обойдется?", "");

//     if ((typeof (question1)) === 'string' && (typeof (question1)) != null &&
//         (typeof (question2)) != null && question1 != "" && question2 != "" &&
//         question1.length < 50) {
//         console.log("Введённые данные соответствуют");
//         appData.expenses[question1] = question2;
//     } else {
//         console.log("Введённые данные не соответствуют попробуйте ещё раз");
//         i--;
//     }
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
// Ответы на вопросы
// 1)в JS существует 7 типов данных
// 2)При помощи console.log() в скобках 
// указать информацию которую надо вывести
// || - оператор "или" выдаёт true если один из двух операндов правда  
// && - оператор "и" выдает true если оба операнда правда