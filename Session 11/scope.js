let name = "john"; // global
myFunc = () => {
    let name = "thomas"; // local or function
    console.log(name);
}


myFunc();
console.log(name);
