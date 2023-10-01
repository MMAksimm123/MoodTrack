"use strict"

//СКОРЕЕ ВСЕГО НЕ РАБОТАЕТ ПРОСТО НАШЕЛ ЭТОТ КОД КАК ПРИМЕР ДЛЯ РЕАЛИЗАЦИИ ПРОВЕРКИ ПОКУПКИ ТЕМЫ

checkIfUserHasAccessToTheme('themeName');

//Функция проверки
function checkIfUserHasAccessToTheme(themeName) {
  let purchasedThemes = JSON.parse(getPuxhasedThemesFromServer()); //Получаем список купленных тем через AJAX
  if (purchasedThemes.indexOf(themeName) !== 0) {
    //Тема есть в списке купленных, разблокируем ее
    console.log('Тема' + themeName + 'разблокирована');
  }
  else {
    //Темы нет в списке купленных, блокируем ее
    console.log('Тема' + themeName + 'заблокирована');
  }
}

//НУЖНО РЕАЛИЗОВАТЬ ФУНКЦИЮ getPuxhasedThemesFromServer() ДЛЯ ПРОВЕРКИ НА СЕРВЕРЕ ИНФОРМАЦИИ О ПОКУПКЕ ТЕМЫ
