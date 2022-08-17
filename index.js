const numbers = [5, 1, 2, 3, 10];
// const numbers2 = [1, 2, 3]

function doubleValues() {
  const doubled = numbers.map((item) => item * 2);
  console.log("Q1.", doubled);
}

doubleValues();

console.log("--------------------------");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = [];

arr.forEach((number) => {
  if (number % 2 === 0) {
    even.push(number);
  }
});

console.log("Q2.", even);

// console.log("-----------filter---------------");

// function onlyEvenValues() {
//   const even = numbers.filter((number) => {
//     return number % 2 === 0;
//   });
//   console.log("Q2.", even);
// }

// onlyEvenValues();

console.log("--------------------------");

const result = [];
const array = ["colt", "matt", "tim", "udemy"];
function showFirstAndLast() {
  array.forEach((item) => result.push(item[0] + item[item.length - 1]));
}

showFirstAndLast();
console.log("Q3.", result);

console.log("--------------------------");

const addKeyAndValue = (array, key, value) => {
  array.forEach((item) => {
    item[key] = value;
  });
  console.log("Q4.", array);
};

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

console.log("--------------------------");

function vowelCount(string) {
  const stringFixed = string.toLowerCase();

  const arrFromString = [...stringFixed]
//   console.log(arrFromString);
  const vowels = "aeiou";
  const returnedVowels = {};
    arrFromString.forEach(letter => {
        if (vowels.includes(letter)) {
            if (returnedVowels[letter] === undefined) {
                returnedVowels[letter] = 1
            }
            else {
                returnedVowels[letter] +=1
            }
        }
    })


console.log(returnedVowels);
  return returnedVowels
}

vowelCount("Elie");
vowelCount("Tim");
vowelCount("Matt");
vowelCount("hmmm");
vowelCount("I Am awesome and so are you");

// console.log("--------------------------");
