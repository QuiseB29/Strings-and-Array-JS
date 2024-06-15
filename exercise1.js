let fruits = ['apple', "Grapes", "Oranges"]

function addFruit(arr, fruits) {
    arr.push(fruits);
    return arr;
}





console.log(addFruit(fruits,"Strawberry"))


function removeLastFruit(arr) {
    arr.pop();
    return arr;
}

removeLastFruit(fruits)