"use-strict";
const ps = require("prompt-sync");
const prompt = ps();
let buyer = prompt("what is your name?:");
console.log(`Hello, ${buyer}`);
let money = prompt("current balance: ")
let seller = prompt("the name of the seller: ");
console.log(`Welcome, to the ${seller} store!`);
let name = prompt("How many products in market will be?");
let groceries = new Array();
let costsgroceries = new Array();
for(let i = 0; i < name; i++){
    let products = prompt("the name of the product:");
    groceries.push(products);
    let costs = prompt("and cost: ");
    costsgroceries.push(costs);
}
function canbuy(x){
    let check = 0;
    let sum;
   for(let i = 0; i < groceries.length; i++){
       if(x === groceries[i]){
           sum+=costsgroceries[i];
           console.log("Yes");
           check = 1;
           break;
       }
   }
   if(check === 0){
       console.log("No")
   }
}
console.log(`here is the catalog: ${groceries} \n ${costsgroceries}`);
while(name > 0){
let ask = prompt("what do you want to buy?: ");
    canbuy(ask);
name --;
}
if(sum < money) {
    console.log("You can buy it all, you're lucky!");
}
else{
    console.log("Not in this time)");
}

