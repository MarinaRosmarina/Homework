// 1
function sayHello(name) {
    if(name == "Mark") {
        return "Hi, " + name + "!";
    } else {
        return "Hello, " + name + "!";
    }
}
console.log(sayHello("Viktor"));
console.log(sayHello("Mark"));
console.log(sayHello("Oleg"));

// 3
function min(a, b) {
    if (a < b) {
    return a;
    } else {
    return b;
    }
}
console.log(min(2,5))
console.log(min(3,-1))
console.log(min(1,1))

// 4
function isEven(number) { return number % 2 === 0; }
console.log(isEven(1))
console.log(isEven(2))
