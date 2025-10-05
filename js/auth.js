// js/auth.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const BACKEND_URL = 'https://plant-selling-ecommerce-webiste-production.up.railway.app';

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value.trim();

            try {
                const response = await fetch(`${BACKEND_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const result = await response.json();


                if (response.ok) {
                    // Store the userId to use for cart operations
                    localStorage.setItem('userId', result.userId);
                    localStorage.setItem('userRole', result.userRole);
                    // Redirect based on role
                    if (result.userRole === 'admin') {
                        window.location.href = 'admin.html';
                    } else {
                        window.location.href = 'index.html';
                    }
                } else {
                    alert(result.message);
                }
            } catch (error) {
                console.error('Login failed:', error);
                console.log('An error occurred. Please try again.');
            }
        });
    }
});