'use strict'




const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getGenerator = function () {
    let numPC = Math.ceil(Math.random() * 100)
    console.log(numPC);

    const asking = function () {
        let numUser = prompt('Угадай число от 1 до 100');
        console.log(typeof numUser, numUser);
        if (+numUser === numPC) {
            return alert( "Поздравляю, Вы угадали!!!");
        } else if (numUser == null) {
            return alert( "Игра окончена");
        }
        else if (!isNumber(numUser) || numUser.trim() == '') {
            alert( "Введи число!");
            asking();
        }  else if (numUser > numPC) {
            alert( "Загаданное число меньше"); 
            asking();
        } else if (numUser < numPC && numUser !== 0) {
            alert( "Загаданное число больше");
            asking();
        }
    }
    asking()
}


getGenerator()
