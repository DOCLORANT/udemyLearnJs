let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    question2 = prompt("Во сколько обойдется?", ""),
    question3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    question4 = prompt("Во сколько обойдется?", "");

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

alert(appData.budget / 30);

// Ответы на вопросы
// 1)в JS существует 7 типов данных
// 2)При помощи console.log() в скобках 
// указать информацию которую надо вывести
// || - оператор "или" выдаёт true если один из двух операндов правда  
// && - оператор "и" выдает true если оба операнда правда