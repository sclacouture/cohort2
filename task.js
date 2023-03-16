const log = [
  { activity: "restaurants", price: 102, weekend: false },
  { activity: "travel", price: 103, weekend: false },
  { activity: "coffeeshop", price: 66, weekend: false },
  { activity: "restaurants", price: 126, weekend: true },
  { activity: "coffeeshop", price: 138, weekend: false },
  { activity: "restaurants", price: 98, weekend: false },
  { activity: "travel", price: 139, weekend: false },
  { activity: "travel", price: 52, weekend: true },
  { activity: "travel", price: 133, weekend: true },
  { activity: "travel", price: 141, weekend: false },
  { activity: "party", price: 77, weekend: false },
  { activity: "coffeeshop", price: 71, weekend: false },
  { activity: "museums", price: 122, weekend: false },
  { activity: "concert", price: 102, weekend: true },
  { activity: "party", price: 92, weekend: true },
  { activity: "party", price: 51, weekend: false },
  { activity: "concert", price: 46, weekend: false },
  { activity: "restaurants", price: 67, weekend: false },
  { activity: "travel", price: 156, weekend: false },
  { activity: "museums", price: 83, weekend: false },
  { activity: "travel", price: 81, weekend: false },
  { activity: "museums", price: 46, weekend: true },
  { activity: "restaurants", price: 59, weekend: true },
  { activity: "concert", price: 114, weekend: false },
  { activity: "travel", price: 93, weekend: false },
  { activity: "travel", price: 70, weekend: false },
  { activity: "party", price: 138, weekend: false },
  { activity: "travel", price: 154, weekend: false },
  { activity: "coffeeshop", price: 46, weekend: true },
  { activity: "restaurants", price: 80, weekend: false },
  { activity: "museums", price: 52, weekend: false },
  { activity: "concert", price: 155, weekend: false },
  { activity: "travel", price: 68, weekend: false },
  { activity: "museums", price: 125, weekend: false },
  { activity: "restaurants", price: 116, weekend: false },
  { activity: "museums", price: 115, weekend: false },
  { activity: "concert", price: 43, weekend: false },
  { activity: "party", price: 108, weekend: false },
  { activity: "restaurants", price: 57, weekend: false },
  { activity: "concert", price: 155, weekend: true },
  { activity: "party", price: 40, weekend: false },
  { activity: "museums", price: 150, weekend: false },
  { activity: "party", price: 129, weekend: false },
  { activity: "coffeeshop", price: 90, weekend: false },
  { activity: "coffeeshop", price: 54, weekend: false },
  { activity: "party", price: 143, weekend: true },
  { activity: "travel", price: 132, weekend: true },
  { activity: "concert", price: 115, weekend: false },
  { activity: "museums", price: 138, weekend: false },
  { activity: "concert", price: 142, weekend: true },
  { activity: "restaurants", price: 127, weekend: true },
  { activity: "coffeeshop", price: 115, weekend: true },
  { activity: "museums", price: 156, weekend: true },
  { activity: "concert", price: 117, weekend: true },
  { activity: "museums", price: 133, weekend: false },
  { activity: "museums", price: 129, weekend: false },
  { activity: "concert", price: 84, weekend: true },
  { activity: "museums", price: 79, weekend: false },
  { activity: "party", price: 119, weekend: false },
  { activity: "coffeeshop", price: 103, weekend: false },
  { activity: "party", price: 139, weekend: true },
  { activity: "party", price: 144, weekend: false },
  { activity: "restaurants", price: 99, weekend: false },
  { activity: "restaurants", price: 42, weekend: false },
  { activity: "concert", price: 109, weekend: false },
  { activity: "museums", price: 94, weekend: false },
  { activity: "museums", price: 71, weekend: true },
  { activity: "restaurants", price: 87, weekend: false },
  { activity: "museums", price: 91, weekend: true },
  { activity: "party", price: 63, weekend: true },
  { activity: "coffeeshop", price: 133, weekend: false },
  { activity: "restaurants", price: 97, weekend: false },
  { activity: "concert", price: 57, weekend: true },
  { activity: "coffeeshop", price: 68, weekend: false },
  { activity: "museums", price: 118, weekend: false },
  { activity: "party", price: 65, weekend: false },
  { activity: "concert", price: 87, weekend: false },
  { activity: "travel", price: 93, weekend: false },
  { activity: "concert", price: 58, weekend: false },
  { activity: "concert", price: 134, weekend: false },
  { activity: "museums", price: 42, weekend: false },
  { activity: "restaurants", price: 141, weekend: false },
  { activity: "museums", price: 143, weekend: false },
  { activity: "coffeeshop", price: 93, weekend: true },
  { activity: "coffeeshop", price: 148, weekend: false },
  { activity: "coffeeshop", price: 155, weekend: true },
  { activity: "museums", price: 83, weekend: false },
  { activity: "concert", price: 43, weekend: false },
  { activity: "travel", price: 56, weekend: false },
  { activity: "museums", price: 137, weekend: false },
  { activity: "museums", price: 55, weekend: false },
  { activity: "museums", price: 132, weekend: false },
  { activity: "party", price: 65, weekend: true },
  { activity: "travel", price: 127, weekend: true },
  { activity: "museums", price: 79, weekend: false },
  { activity: "museums", price: 113, weekend: true },
  { activity: "coffeeshop", price: 130, weekend: true },
  { activity: "travel", price: 121, weekend: false },
  { activity: "museums", price: 98, weekend: true },
  { activity: "concert", price: 44, weekend: false },
];

function totalExpenses(log) {
  let total = 0;
  for (let i = 0; i < log.length; i++) {
    let entry = log[i];
    total += entry.price;
  }
  return total;
}

function expensesWeekend(log) {
  // "log" es el argumento
  let weekendexpenses = 0;

  for (let i = 0; i < log.length; i++) {
    let entry = log[i];
    if (entry.weekend) {
      weekendexpenses += entry.price;
    }
  }
  return "Expenses weekend: " + weekendexpenses;
}

console.log(expensesWeekend(log));

// let one = "cual fue la actividad que mas gasto plata los fines de semana?";

function totalByActivityOnWeekends(log, string) {
  let total = 0;
  for (let i = 0; i < log.length; i++) {
    let entry = log[i];
    if (entry.weekend) {
      if (entry.activity == string) {
        total += entry.price;
      }
    }
  }
  return total;
}

console.log("El total de gastos es: " + totalExpenses(log));

console.log(
  "Total de Museums fin de semana es: " +
    totalByActivityOnWeekends(log, "museums")
);
console.log(
  "Total de Concerts fin de semana es: " +
    totalByActivityOnWeekends(log, "concert")
);
console.log(
  "Total de Restaurants fin de semana es: " +
    totalByActivityOnWeekends(log, "restaurants")
);
console.log(
  "Total de Coffeeshops fin de semana es: " +
    totalByActivityOnWeekends(log, "coffeeshop")
);
console.log(
  "Total de Travel fin de semana es: " +
    totalByActivityOnWeekends(log, "travel")
);
console.log(
  "Total de Party fin de semana es: " + totalByActivityOnWeekends(log, "party")
);

function cuantosWeekends(log) {
  let wks = 0;

  for (let i = 0; i < log.length; i++) {
    let entry = log[i];
    if (entry.weekend) {
      wks = wks + 1;
    }
  }
  return wks;
}

let gastoFin = [
  totalByActivityOnWeekends(log, "museums"),
  totalByActivityOnWeekends(log, "concert"),
  totalByActivityOnWeekends(log, "restaurants"),
  totalByActivityOnWeekends(log, "coffeeshop"),
  totalByActivityOnWeekends(log, "travel"),
  totalByActivityOnWeekends(log, "party"),
];

let actividadesFin = [
  "museums",
  "concert",
  "restaurants",
  "coffeeshop",
  "travel",
  "party",
];

const max = Math.max(...gastoFin);

console.log(gastoFin);
console.log(max);

function activityMaxWeekend(gastoFin) {
  let mayorGasto = 0;
  let activity = "";
  for (let i = 0; i < gastoFin.length; i++) {
    if (gastoFin[i] == max) {
      mayorGasto += gastoFin[i];
      activity = actividadesFin[i];
    }
  }

  return `La actividad con mayor gasto el fin de semana fue "${activity}" con un total de ${mayorGasto}.`;
}

console.log(activityMaxWeekend(gastoFin));

// let two = "cual fue la actividad que menos gasto plata los dias de semana?";
function totalByActivityOnWeekdays(log, string) {
  let total = 0;
  for (let i = 0; i < log.length; i++) {
    let entry = log[i];
    if (entry.weekend == false) {
      if (entry.activity == string) {
        total += entry.price;
      }
    }
  }
  return total;
}
console.log("_ _ _ _ _ _");
console.log(
  "Total de Museums días de semana es: " +
    totalByActivityOnWeekdays(log, "museums")
);
console.log(
  "Total de Concerts días de semana es: " +
    totalByActivityOnWeekdays(log, "concert")
);
console.log(
  "Total de Restaurants días de semana es: " +
    totalByActivityOnWeekdays(log, "restaurants")
);
console.log(
  "Total de Coffeeshops días de semana es: " +
    totalByActivityOnWeekdays(log, "coffeeshop")
);
console.log(
  "Total de Travel días de semana es: " +
    totalByActivityOnWeekdays(log, "travel")
);
console.log(
  "Total de Party días de semana es: " + totalByActivityOnWeekdays(log, "party")
);

let gastoEntre = [
  totalByActivityOnWeekdays(log, "museums"),
  totalByActivityOnWeekdays(log, "concert"),
  totalByActivityOnWeekdays(log, "restaurants"),
  totalByActivityOnWeekdays(log, "coffeeshop"),
  totalByActivityOnWeekdays(log, "travel"),
  totalByActivityOnWeekdays(log, "party"),
];

let actividadesEntre = [
  "museums",
  "concert",
  "restaurants",
  "coffeeshop",
  "travel",
  "party",
];

const min = Math.min(...gastoEntre);

console.log(min);

function activityMinWeekdays(gastoEntre) {
  console.log(gastoEntre);
  let menorGasto = 0;
  let activityEntre = "";
  for (let i = 0; i < gastoEntre.length; i++) {
    if (gastoEntre[i] == min) {
      menorGasto += gastoEntre[i];
      activityEntre = actividadesEntre[i];
    }
  }

  return `La actividad con menor gasto los días de semana fue ${activityEntre} con un total de ${menorGasto}`;
}

console.log(activityMinWeekdays(gastoEntre));

console.log("_ _ _ _ _");

// let three = "promedio de gasto fines de semana";

function averageWeekendsExpenses() {
  let weekendExpenses =
    totalByActivityOnWeekends(log, "museums") +
    totalByActivityOnWeekends(log, "party") +
    totalByActivityOnWeekends(log, "concert") +
    totalByActivityOnWeekends(log, "restaurants") +
    totalByActivityOnWeekends(log, "travel") +
    totalByActivityOnWeekends(log, "coffeeshop");
  let weekends = 0;
  for (let i = 0; i < log.length; i++) {
    let entry = log[i];
    if (entry.weekend) {
      weekends += 1;
    }
  }
  return weekendExpenses / weekends;
}
console.log(
  "El promedio de gastos los fines de semana fue: " +
    averageWeekendsExpenses() +
    "."
);
console.log("_ _ _ _ _");
// let four = "promedio de gastos fines de semana en restaurantes vs restaurantes en dias de semana";

function compartivoRestaurantes() {
  let restaurantesFin = totalByActivityOnWeekends(log, "restaurants");
  let restaurantesEntre = totalByActivityOnWeekdays(log, "restaurants");
  let diasEndRestaurants = 0;
  let diasDayRestaurants = 0;
  for (let i = 0; i < log.length; i++) {
    let entry = log[i];
    if (entry.weekend && entry.activity == "restaurants") {
      diasEndRestaurants += 1;
    }
    if (entry.weekend == false && entry.activity == "restaurants") {
      diasDayRestaurants += 1;
    }
  }
  return `El promedio de gasto en restaurantes los fines de semana fue ${
    restaurantesFin / diasEndRestaurants
  } y el promedio de gasto en restaurante los días de semana fue ${
    restaurantesEntre / diasDayRestaurants
  }.`;
}

console.log(compartivoRestaurantes());

// console.log(expensesWeekend(log));
// console.log(cuantosWeekends(log));

let one = "cual fue la actividad que mas gasto plata los fines de semana?";

function mostExpensiveActivity(log) {
  let expensesMuseums = 0;
  let expensesConcerts = 0;
  // let expensesCoffeeshops = 0;
  // let expensesParties = 0;
  // let expensesTravels = 0;
  // let expensesRestaurants = 0;
  // console.log(log);
  for (let i = 0; i < log.length; i++) {
    let entry = log[i];
    // Corchetes cuadrados hacen referencias a un objeto dentro del array
    // console.log(entry);
    if (entry.weekend && entry.activity == "museums") {
      expensesMuseums += entry.price;
      // expensesMuseums = "Museums: " + expensesMuseums;
    }
    if (entry.weekend && entry.activity == "concert") {
      expensesConcerts += entry.price;
      // expensesConcerts = "Concerts: " + expensesConcerts;
    }
  }
  if (expensesMuseums > expensesConcerts) {
    return expensesMuseums;
  } else {
    return expensesConcerts;
  }
}
// console.log(mostExpensiveActivity(log));

// function totalByActivityOnWeekends(String) {}

// Una función que imprima la actividad total
// Una función que imprima la actividad total los fines de semana
// Una función que imprima la actividad total los días de semana
