document.getElementById('Authorization').addEventListener('submit', loginUser);
function loginUser(event) {
    event.preventDefault();
    
    let login = document.getElementById('nick').value;
    let password = document.getElementById('Password').value;

    console.log(`Авторизация: Логин = ${login}, Пароль = ${password}`);

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let user = users.find(user => user.login === login && user.password === password);

    if (user) {
        alert('Вы успешно авторизовались!')
        window.location.href = "http://127.0.0.1:5500/pages/mainPage/index.html"
    } else {
        alert('Неверный логин или пароль');
    }

    document.getElementById('Authorization').reset();
}

// Функция для установки состояния пользователя при авторизации
function login(username) {
    localStorage.setItem('login', username);
    updateHeader();
}

// Функция для выхода пользователя
function logout() {
    localStorage.removeItem('login');
    updateHeader();
}

// Функция для обновления шапки в зависимости от состояния пользователя
function updateHeader() {
    const username = localStorage.getItem('login');
    const loginButton = document.getElementById('login-button');
    const userInfo = document.getElementById('user-info');
    const usernameSpan = document.getElementById('username');

    if (username) {
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        userInfo.style.display = 'block';
        usernameSpan.textContent = username;
    } else {
        loginButton.style.display = 'block';
        registerButton.style.display = 'block';
        userInfo.style.display = 'none';
    }
}

// Обновляем шапку при загрузке страницы
document.addEventListener('DOMContentLoaded', updateHeader);

