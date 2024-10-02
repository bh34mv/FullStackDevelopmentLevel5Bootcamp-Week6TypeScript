// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Welcome to Tuplets'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Adding something New');

console.log(ourTuple);
