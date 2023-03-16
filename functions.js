console.log("");

function greet(name) {
    console.log("Hello, ", name);
}

function square(number){
    console.log(number*number);
}

function isEven(number){
    console.log(number % 2 == 0);
}

let newGreet = function(name, age){
    console.log("Hello again,", name, "You are ", Stringe(age), "years old.");
}; 

// greet("Carlos");
// square(5);
// isEven(4);
// isEven(3); 
// newGreet("Sebas", 34);

// Cuando corres una función con menos de los values 
// let o const son formas de declarar variables que no van a cambiar
function formatInventory(cows, chicken, dogs) {
    console.log(`${zeroPad(cows, 3)} cows`);
    console.log(`${zeroPad(chicken, 3)} chicken`);
    console.log(`${zeroPad(dogs, 3)} dogs`);
}

    
function zeroPad(number){
    let string = String(number);
    while (string.length < 3){
        string = "0" + string;
    }
    return string;
}
formatInventory(5,44, 22);


function countBs(Bs){

}

function formatCurrency(number){
    
}