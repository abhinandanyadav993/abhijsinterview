let { x = 1, y = x } = { x: 2 };

console.log(x, y);
// Reason: y uses x from the object, not the default.