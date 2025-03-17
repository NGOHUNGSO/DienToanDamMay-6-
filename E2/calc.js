const calc = (a, b, p) => {
    if (a === undefined || b === undefined || p === undefined) {
        return "Please provide all parameters";
    }

    switch (p) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid operator";
    }
};

module.exports = calc; 
