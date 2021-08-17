document.getElementById('login-btn').addEventListener('click', function () {
    // get email field
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;

    // get pass field
    const passField = document.getElementById('pass-field');
    const userPass = passField.value;

    if (userEmail == 'rk@rk.com' && userPass == 'rakib') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }
})
