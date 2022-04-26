// Code your solution in this file!
const hq = 42;
let blocks;
let feet;
let price;
function distanceFromHqInBlocks(number) {
   if (number <= 42) { 
       blocks = hq - number;
}
    else { 
        blocks = number - hq;
    }
   return blocks;
}
function distanceFromHqInFeet(number) {
    distanceFromHqInBlocks(number);
    feet = blocks * 264;
    return feet;
}
function distanceTravelledInFeet(num1, num2) {
    if (num1 >= num2) {
        feet = (num1 - num2) * 264;
    }
    else {
        feet = (num2 - num1) * 264;
    }

    return feet;

}
function calculatesFarePrice(num1, num2) {
    /* first 400 ft free
    400-2000 ft 0.02/ft - 400
    flat fare 2000-2500 ft
    2500 ft = cannot travel that far */
    distanceTravelledInFeet(num1, num2);
    if (feet < 400) {
        price = 0;
    }
    else if (feet < 2000) {
        price = (feet - 400) * 0.02;
    }
    else if (feet < 2500) {
        price = 25;
    }
    else {
        price = 'cannot travel that far';
    }
    return price;
}