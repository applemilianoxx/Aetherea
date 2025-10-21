// Aetherea - Main Application Entry Point
console.log('Welcome to Aetherea! 🚀');

// Simple greeting function
function greetUser(name = 'Developer') {
    return `Hello, ${name}! Welcome to Aetherea.`;
}

// Example usage
const greeting = greetUser('Emiliano');
console.log(greeting);

// Export for potential module usage
module.exports = {
    greetUser
};
