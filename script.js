//your JS code here. If required.
let student = {
    name: "John"
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Example usage:
console.log(student.getKeys()); // Output: ['name']