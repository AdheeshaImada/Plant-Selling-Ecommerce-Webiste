document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const BACKEND_URL = 'https://plant-selling-ecommerce-webiste-production.up.railway.app';


    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    async function handleSignup(e) {
        e.preventDefault(); // Stop the page from reloading

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // --- Client-Side Validation ---
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // --- Prepare Data ---
        const userData = {
            username: username,
            email: email,
            password: password,
        };

        try {
            const response = await fetch(`${BACKEND_URL}/auth/signup`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (response.ok) {
                // Successful signup
                alert('Account created successfully! Please sign in now.');
                // Redirect the user to the sign-in page
                window.location.href = 'singin.html';
            } else {
                // Handle errors (e.g., username already exists)
                alert(`Sign Up Failed: ${result.message || 'An unknown error occurred.'}`);
            }

        } catch (error) {
            console.error('Sign up network error:', error);
            alert('A network error occurred. Please try again.');
        }
    }
});