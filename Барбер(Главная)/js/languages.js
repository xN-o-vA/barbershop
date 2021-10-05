var language = 'ru';

languages = {
  ru: {
    clients_office: "Кабинет клиента",
    masters_office: "Кабинет мастера",
    online_appointment: "Онлайн-запись",
    master_entry: "Вход в кабинет мастера",
    home: "Главная / Вход в Личный кабинет",
    entry: "Вход",
    registration: "Регистрация",
    full_name: "ФИО *",
    password_repeat: "Пароль еще раз *",
    password: "Пароль *",
    password_forgot: "Забыли пароль?",
    remember: "ЗАПОМНИТЬ МЕНЯ",
    clarification: "Для регистрации вам необходимо выбрать коворкинг и отправить запрос через ",
    clarification_link: "форму на сайте",
  },
  en: {
    clients_office: "Client cabinet",
    masters_office: "Master's office",
    online_appointment: "Online-booking",
    master_entry: "Login to the master's office",
    home: "Home / Login to your personal account",
  },
}

function _U(name) {
  return languages[language][name];
}