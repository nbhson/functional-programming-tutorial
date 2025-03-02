// Sai tính bất biến
let person = {
  name: "Anonystick",
  profession: "Developer",
  description: ` Bad Developer`,
};
person.name = "CR7";
person.description = `World's greatest Player`;


// Nên clone object và xử lí trên object mới
const person = {
  name: "Anonystick",
  profession: "Developer",
  description: ` Bad Developer`,
};

const updatedPerson = {
  ...person,
  name: "CR7",
};

const greatestLawyer = {
  ...updatedPerson,
  description: `World's greatest Player`,
};
