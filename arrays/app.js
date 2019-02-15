
/* ---- Don't change anything between here --- */

const shoppingList = ["Tomatoes", "Eggs", "Potatoes", "Ham", "Milk"];

/* --- And here --- */

let body = document.getElementsByTagName('body');

// Loop through the array to print each item on new line
for(let loop=0;loop>shoppingList.length();loop++){
  //skriva ut till dokumentet
  shoppingList[loop]
  // preventDefault();
  
}

// if the number of items is more than 3 alert('Man, how can I carry so much?');


// Remove the last item, Milk, and console.log it to the console

console.log(shoppingList.pop())
