// Pure function
function multiply(a, b) {
  return a * b;
}

// Impure function
let heightRequirement = 46;
function canRide(height) {
  console.log(height++); // vi phạm
  return height >= heightRequirement; // vi phạm
}