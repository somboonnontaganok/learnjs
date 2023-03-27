let toppingChoice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("which topping would you like"))
        },5000);
        });
    };

async function kitchen() {
    console.log("1");
    console.log("2");
    console.log("3");

    await toppingChoice();
    console.log("4");
    console.log("5");
}

kitchen();

console.log("washing the cup");
console.log("cleaning the worktip");
console.log("taking other orders");