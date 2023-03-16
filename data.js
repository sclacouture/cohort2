let first = ["andre", "beto", "chami", "alejandra"];
let last = ["zulu", "sal", "ura", "cot"];
let age = [23, 45, 23, 25];



let person1 = {
  first: "juli",
  last: "zulu",
  age: 23,
  passing: true,
};

function makePeople(first, last, age) {
  let people = [];
  for (let i = 0; i < first.length; i++) {
    let person = {
      first: first[i],
      last: last[i],
      age: age[i],
    };
    people.push(person);
  }
  return people;
}

function averageAge(people) {
  let sumOfAges = 0;
  for (let i = 0; i < people.length; i++) {
    console.log("in function:", people[i]);
    sumOfAges = sumOfAges + people[i].age;
  }
  return sumOfAges / people.length;
}

let people = makePeople(first, last, age);
console.log(averageAge(people));
