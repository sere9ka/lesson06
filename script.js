'use strict'




const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getGenerator = function () {
    let numPC = Math.ceil(Math.random() * 100)
    let count = 10;

    const asking = function () {
        let numUser = prompt('Угадай число от 1 до 100');
        count--
        if (+numUser === numPC) {
            let restart = confirm( "Поздравляю, Вы угадали! Хотите сыграть ещё?");
            if (restart == true) {
                getGenerator()
            } else {
                return alert('Игра окончена!')
            }
        } else if (count < 1) {
            let restart = confirm( "Попытки закончились, хотите сыграть ещё?");
            if (restart == true) {
                getGenerator()
            } else {
               return alert('Игра окончена!')
            }
        } else if (numUser == null) {
            return alert( "Игра окончена");
        } else if (!isNumber(numUser) || numUser.trim() == '') {
            alert( "Введи число, осталось " + count + " попыток ввода");
            asking();
        } else if (numUser > numPC) {
            alert( "Загаданное число меньше, осталось " + count + " попыток ввода"); 
            asking();
        } else if (numUser < numPC && numUser !== 0) {
            alert( "Загаданное число больше, осталось " + count + " попыток ввода");
            asking();
        }
    }
    asking()
}


getGenerator()
