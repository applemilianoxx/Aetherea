// Aetherea - Main Application Entry Point
import { formatDate, generateId, validateEmail, capitalizeFirst } from './src/utils.js';

console.log('Welcome to Aetherea! 🚀');
console.log('Application started at:', formatDate(new Date()));

// Simple greeting function
function greetUser(name = 'Developer') {
    const capitalizedName = capitalizeFirst(name);
    return `Hello, ${capitalizedName}! Welcome to Aetherea.`;
}

// Enhanced user management
class UserManager {
    constructor() {
        this.users = new Map();
    }
    
    addUser(name, email) {
        if (!validateEmail(email)) {
            throw new Error('Invalid email address');
        }
        
        const id = generateId();
        const user = { id, name: capitalizeFirst(name), email, createdAt: new Date() };
        this.users.set(id, user);
        return user;
    }
    
    getUser(id) {
        return this.users.get(id);
    }
    
    getAllUsers() {
        return Array.from(this.users.values());
    }
}

// Example usage
const greeting = greetUser('Emiliano');
console.log(greeting);

// Initialize user manager
const userManager = new UserManager();
const newUser = userManager.addUser('Emiliano', 'emiliano@example.com');
console.log('New user created:', newUser);

// Export for potential module usage
export { greetUser, UserManager };
