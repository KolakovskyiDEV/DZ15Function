// Дан массив с числами const arr = [1, 2, 3, -1, -2, -3];
// Нкобходимо написать функцию которая вернет новый массив содержащий только положиельные числа.Для этого:
// — Создаем функцию с произвольным именем
// — Функция принимает массив в качестве параметра
// — В теле функции создаем пустой массив(пример: const exampleArr = [])
// — Если массив переданный в параметр функции пустой, то возвращаем сообщение об этом
// — Перебираем циклом массив, который передан в качестве параметра(использовать цикл for)
// — В теле цикла проверям является ли текущий элемент положительным числом или отрицательным(if)
// — Если число положительное, то добавлем его в ранее созданный массив с помощь функции push(пример exampleArr.push(currentPositiveNumber))
// — После выполнения цикла проверям массив, который наполняли только положиельными значениями
// — Если он не пустой, то возвращаем этот массив
// — Если пустой, возвращаем null
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// P.S.Можно написать вспомогательную функцию для проверки данных(по желанию)



let arr = [1, 2, 3, -1, -2, -3];

let checkData = function (params) {
    // Проверяем пустой ли масив arr.
    if (params.length === 0) {
        return false;
    } else {
        return true;
    }


}

function arrayFunc(params) {
    let exampleArr = [];
      // Вызываем проверку.
    if (checkData(arr)) {
    // Добавляем элементы в новый масив.
    for (i = 0; i < params.length; i++) {
        if (params[i] > 0) {


            exampleArr.push(params[i]);
        }
    }  
    } else {
        return "error: Массив пустой"
    }
     // Проверяем пустой ли масив exampleArr.
    if (exampleArr.length === 0) {
        return exampleArr = null;
    } else {
        return exampleArr;
    }
}
let result = arrayFunc(arr);
console.log(result);






