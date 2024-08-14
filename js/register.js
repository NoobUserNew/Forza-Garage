document.getElementById('register').addEventListener('submit', registerUser);


function registerUser(event) {
    event.preventDefault();
    
    let regLogin = document.getElementById('nick').value;
    let regPassword = document.getElementById('Password').value;
    let confirmPassword = document.getElementById('ConfirmPassword').value;

    console.log(`Регистрация: Логин = ${regLogin}, Пароль = ${regPassword}, Подтверждение Пароля = ${confirmPassword}`);

    if (regPassword !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.login === regLogin)) {
        alert('Пользователь с таким логином уже существует');
        return;
    }

    users.push({ login: regLogin, password: regPassword });
    console.log('Перед сохранением:', JSON.stringify(users));
    localStorage.setItem('users', JSON.stringify(users));

    console.log('После сохранения:', localStorage.getItem('users'));

    alert('Регистрация успешна');
    document.getElementById('registrationForm').reset();
}
