const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

// Switch to register form when the register button is clicked
registerButton.addEventListener('click', () => {
	loginForm.classList.remove('show');
	registerForm.classList.add('show');
	loginButton.classList.remove('active');
	registerButton.classList.add('active');
});

// Switch to login form when the login button is clicked
loginButton.addEventListener('click', () => {
	registerForm.classList.remove('show');
	loginForm.classList.add('show');
	registerButton.classList.remove('active');
	loginButton.classList.add('active');
});

// Validation for login form
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = loginForm.username.value.trim();
	const password = loginForm.password.value.trim();
	if (username === '') {
		showError(loginForm, 'username', 'Username is required');
	} else {
		hideError(loginForm, 'username');
	}
	if (password === '') {
		showError(loginForm, 'password', 'Password is required');
	} else {
		hideError(loginForm, 'password');
	}
	if (username !== '' && password !== '') {
		alert('Logged in successfully!');
		location.href = "3.html";
	}
});

// Validation for register form
registerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = registerForm['reg-username'].value.trim();
	const email = registerForm.email.value.trim();
	const password = registerForm['reg-password'].value.trim();
	const confirmPassword = registerForm['confirm-password'].value.trim();
	if (username === '') {
		showError(registerForm, 'reg-username', 'Username is required');
	} else {
		hideError(registerForm, 'reg-username');
	}
	if (email === '') {
		showError(registerForm, 'email', 'Email is required');
	} else if (!isValidEmail(email)) {
		showError(registerForm, 'email', 'Email is invalid');
	} else {
		hideError(registerForm, 'email');
	}
	if (password === '') {
		showError(registerForm, 'reg-password', 'Password is required');
	} else {
		hideError(registerForm, 'reg-password');
	}
	if (confirmPassword === '') {
		showError(registerForm, 'confirm-password', 'Confirm password is required');
	} else if (password !== confirmPassword) {
		showError(registerForm, 'confirm-password', 'Passwords do not match');
	} else {
		hideError(registerForm, 'confirm-password');
	}
	if (username !== '' && email !== '' && isValidEmail(email) && password !== '' && confirmPassword !== '' && password === confirmPassword) {
		alert('Registered successfully!');
	}
});

// Helper function to show error messages
function showError(form, field, message) {
	const error = form.querySelector(`#${field}-error`);
	if (error) {
		error.textContent = message;
		error.style.display = 'block';
	}
}

// Helper function to hide error messages
function hideError(form, field) {
	const error = form.querySelector(`#${field}-error`);
	if (error) {
		error.textContent = '';
		error.style.display = 'none';
	}
}

// Helper function to check if an email is valid
function isValidEmail(email) {
	const regex = /^\S+@\S+\.\S+$/;
	return regex.test(email);
}
