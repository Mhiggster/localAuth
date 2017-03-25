/**
 * Просиходит Валидация и Запись Данных в Базу
 * 
 * Оффто
 * -----------------------------------------
 * localStorage возрощает null при пустом значений
 */


import elements from "./query.js"
import guid from "./guid.js"

let methods = {},
    data = {};

/**
 * Запись Пользователя в Базу Данных
 * 
 * @param json
 */
methods.createUser = (data) => {
    localStorage.setItem("users", data);
};


/**
 * Валидация
 * -------------------------------------------------
 * 
 * Сборка Данных
 * -------------------------------------------------
 * Собираю все данные с Формы. Генерирую ID и Время
 * Делаю Запрос К баззе Для Генерация Правильного Массива
 * 
 * @param object
 */
methods.validateAndCollectData = (parnetBlock) => {
    let getOldData,
        dataArr,
        userData;

    // 1 Сбор Данных
    data.id = guid();
    data.name = parnetBlock.querySelector("#name").value;
    data.email = parnetBlock.querySelector("#email").value;
    data.password = parnetBlock.querySelector("#password").value;
    // data.dateTime; В будущем
    parnetBlock.querySelector("#r-password");


    // 2 Поиск Старрых Данных Если есть
    getOldData = JSON.parse(localStorage.getItem("users"));
    dataArr = (getOldData) ? getOldData : [];
    dataArr.push(data);
    userData = JSON.stringify(dataArr);

    // Запись Данных ID, Имя, Email, Password, ..Time Возможно
    methods.createUser(userData);
};

/**
 * Находим Блок Оправителя / Родителя.
 * 
 * @param event object
 */
elements.section.content.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.tagName !== "button".toUpperCase()) return;
    let parnetBlock = target.parentElement.parentElement;
    methods.validateAndCollectData(parnetBlock);
});


