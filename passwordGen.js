document.getElementById('generatePasswordBtn').addEventListener('click', function() {
    // Get the desired length from the user
    const length = parseInt(prompt("Enter the desired password length (at least 8):"));

    // Validate input
    if (isNaN(length) || length < 8) {
        alert("Please enter a valid number of at least 8 for password length.");
        return;
    }

    // Define character sets
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

    // Ensure at least one character from each set is included
    let password = '';
    password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));

    // Fill the remaining length with random characters from all sets
    const allCharacters = uppercase + lowercase + numbers + specialCharacters;
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }

    // Shuffle the password to ensure randomness
    // password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Display the generated password
    document.getElementById('passwordDisplay').textContent = `Generated Password: ${password}`;
});
