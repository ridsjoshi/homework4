let numHotdog = prompt("How many hotdogs do you want?");
let numFries = prompt("How many fries do you want?");
let numSodas = prompt("How many sodas do you want?");
var subtotal1 = Math.round((4.25 * numHotdog + 2.60 * numFries + 1.5 * numSodas)*100)/100;
var discount;
var subtotalDisc;
if(subtotal1 >= 20){
    discount = Math.round((subtotal1 / 10.0)*100)/100;
    subtotalDisc = Math.round((subtotal1 - discount)*100)/100;
} else {
    discount = 0;
    subtotalDisc = subtotal1;
}
var tax = Math.round((0.0625 * subtotalDisc)*100)/100;
var price = Math.round((subtotalDisc + tax)*100)/100;


