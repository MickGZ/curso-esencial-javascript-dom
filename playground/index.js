// import "./module.js";

console.log("Hello from an external Javascript file");

// STRINGS

const name = "Miguel Angel";
const lastname = "Gonzales";

const fullname = `${name} ${lastname}`;
console.log(`Hello ${fullname}, welcome to the Javascript esential course`);

// Arrays
const nameList = ["Leonidas", "Rivaldo", "Paula", "Carlos"];
console.log(nameList);

// ways to add elements to an array

// Concat is a method of the arrays to concat them
const newList = nameList.concat("german");
console.log("New List");
console.log(newList);

// spread operator to create a new array
const newList2 = [...nameList, "miguel"];
console.log("New List 2");
console.log(newList2);

// Methods that modify the original array
newList.push("Ronaldo");
console.log(newList);
const removeItem = newList.pop();
console.log("Removed item:" + removeItem);

// Matrices en javascript
const bidimensional = [
  [0, 1, 0],
  [1, 1, 0],
  [0, 1, 1],
];
console.log("MATRIZ");
console.log(bidimensional);
console.log(bidimensional[0][1]);

// Iterando el array, function propia de los array
const cerosList = [];
bidimensional.forEach((i, indexI) => {
  i.forEach((j, indexJ) => {
    if (j === 0) {
      cerosList.push(`${indexI} ${indexJ}`);
    }
  });
});

console.log("Zero list array after foreach");
console.log(cerosList);

const respFind = nameList.find((name) => {
  if (name === "Paula") {
    return true;
  }
  return false;
});

console.log("Find value");
console.log(respFind);

const respFindIndex = nameList.findIndex((name) => {
  if (name === "Paula") {
    return true;
  }
  return false;
});

console.log("Find Index Value");
console.log(respFindIndex);

// Iterate Objects
const user = {
  name: "Miguel",
  lastname: "Gonzales",
  age: 26,
  country: "Bolivia",
  travelingTo: "US",
  profession: "Software Engineer",
  languages: ["English", "Spanish", "French", "Chinesse"],
};

// 1st way to iterate objects with for in
console.log("ITERATE OBJECTS WITH FOR IN");
for (let prop in user) {
  console.log("value of the user: ") + prop;
}

console.log("ITERATE OBJECT WITH OBJECT KEYS");
Object.keys(user).forEach((prop) => {
  console.log(user[prop]);
});

// ITERANDO ARRAYS

for (let value of nameList) {
  console.log(`FOR OF, this is the value: ${value}`);
}

for (let index in nameList) {
  console.log(`FOR IN, this is the value: ${nameList[index]}`);
}

for (let i = 0; i < nameList.length; i++) {
  console.log(`TRADITIONAL FOR, this is the value: ${nameList[i]}`);
}

let count = 0;
while (count < nameList.length) {
  console.log(`WHILE, this is the value: ${nameList[count]}`);
  count = count + 1;
}

// let countDoWhile = 0;
// do {
//   console.log(`DO WHILE, this is the value: ${nameList[countDoWhile]}`);
//   count = count + 1;
// } while (countDoWhile < nameList.length);

// Little exercise
for (let i = 1; i <= 100; i++) {
  console.log("No debo olvidar mi cuaderno en casa");
}
