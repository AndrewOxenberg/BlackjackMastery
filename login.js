function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Your simple authentication logic
    if (username === 'username' && password === 'password') {
        // Redirect to scheduler.html on successful login
        window.location.href = 'scheduler.html';
    }
}