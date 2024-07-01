// Seeing the World: Think of at least five places in the world you’d like to visit.
 //Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to its original order.
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that is order has changes.

let placeToVisit: string [] = ["paris","italy","london","china","australia"];
// print in oroginal order
console.log("original order:", placeToVisit);
// print array in alphabetical order
console.log("Alphabetical order:",placeToVisit.slice().sort());

//array is still in its original order
console.log("original order:",placeToVisit);

// array is still in its original order
console.log("original ordr after sorting:" , placeToVisit);

// print array in review alphabetical order without changing the order of the original list
console.log("Reserve alphabeticql order:" ,placeToVisit.slice().sort().reverse());


//Show that your array is still in its original order by printing it again.
console.log("original order after reverse sorting:",placeToVisit);

//Reverse the order of your list. Print the array to show that its order has changed.

placeToVisit.reverse();
console.log("reverse order:",placeToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log("back to orignal order:",placeToVisit);

//Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.

console.log("sorted in alphabetical order:",placeToVisit.slice().sort());

// Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.

console.log("stored in reserve alphabeticql order:" ,placeToVisit.slice().sort().reverse());