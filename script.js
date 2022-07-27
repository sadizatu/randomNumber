const number = Math.ceil(Math.random() * 10);
console.log(number);
const gNumber = prompt("Guess your number randomly ");
if (gNumber === number) {
    console.log("numbers is matching");
} else {
    console.log("numbers are not matching" + gNumber)
};