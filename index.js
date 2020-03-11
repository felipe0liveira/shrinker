const server = require('./src/server');

console.clear();
console.log('\nInitializing server');

setTimeout(() => {
    console.clear();
    server();    
}, 1000);