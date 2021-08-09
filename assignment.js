// Problem 1
function seerToMon(seer){
    if(typeof seer == 'number'){ // checking weather input is a number or not
        if(seer >= 0){
            return mon = seer / 40; //  40 sher = 1mon;
        }
        return "Please enter positive number."; // if number is negative
    }else{
        return "Invalid input, enter a number.";
    }
}
let amountInMon = seerToMon(80);
console.log(amountInMon);

// Problem 2
function totalSales(quantityOfShirt, quantityOfPant, quantityOfShoe){
    // Prices of items
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    if(quantityOfShirt >= 0 && quantityOfPant >= 0 && quantityOfShoe >= 0){ // checking positive or negative input
        return totalAmount = (shirtPrice * quantityOfShirt) + (pantPrice * quantityOfPant) + (shoePrice * quantityOfShoe);
    }else{
        return "Invalid input, please provide positive number";
    }
}
let myCalculation = totalSales(1,1,1);
console.log(myCalculation);

// Problem 3
function deliveryCost(amountOfTshirt){
    if(amountOfTshirt >= 0){
        // Operation for first 100 products
        if(amountOfTshirt <= 100){ 
            return totalCost = 100 * amountOfTshirt;
        }
        // Operation for first 200 products
        else if(amountOfTshirt > 100 && amountOfTshirt <= 200){
            const firstHundadCost = 100 * 100;
            return totalCost = firstHundadCost + (amountOfTshirt - 100) * 80;
        }
        // Operation for more than 200 products
        else{
            const secondHundradCost = 100 * 100 + 100 * 80;
            return totalCost = secondHundradCost + (amountOfTshirt - 200) * 50;
        }
    }
    else{
        return "Invalid input, please enter positive number";
    }
}
let totalFee = deliveryCost(101);
console.log(totalFee); 

// Problem 4
function perfectFriend(arr){
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'string'){ //Checking Array item is a string or not
            if(arr[i].length == 5){ 
                return arr[i]; // returning string if character of name is 5
            }
        }
        else{
            return "Error! Input names in array";
        }
    }
}
const Names = ['Jannat', 'Shahi', 'Oishee', 'Tayef', 'Mahir'];
let find = perfectFriend(Names);
console.log(find);
