function nameMenuItem(name) {
  return `Delicious ${name}`
};

function createMenuItem(name, price, type) {
  return menuItem = {
    name: name,
    price: price,
    type: type
  }
};

function addIngredients(singleIngred, ingredients) {
  var inArray = false;
  if (ingredients.length > 0) {
    for (i = 0; i < ingredients.length; i++ ) {
      singleIngred === ingredients[i] ? inArray = true : null;
    }
    !inArray ? ingredients.push(singleIngred) : null
  } else {
    ingredients.push(singleIngred)
  } 
  
};


function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

function decreasePrice(price) {
  var decreasedPrice;
  percentagePrice = price * .10
  decreasedPrice = price - percentagePrice;
  return decreasedPrice
};


function createRecipe(title, ingredients , menuItemType) {
 return recipe = {
   title: title, 
   ingredients: ingredients,
   type: menuItemType
 }
}




























// function nameMenuItem(menuItemName) {
//     return `Delicious ${menuItemName}`;
// };

// function createMenuItem(name, price, type) {
//   return menuItem = {
//     name: name,
//     price: price,
//     type: type,
//   }
// };

// function addIngredients(ingredient1, ingredients) {
//   //ingredients.push(ingredient1);
//   var isIn = false;

//   if (ingredients.length > 0) {

//   for (i = 0; i < ingredients.length; i ++) {
//     if (ingredient1 == ingredients[i]) {
//       isIn = true;
//       break;
//     };
//     };
//     if (isIn === false) {
//       ingredients.push(ingredient1);
//     }
// } else {
//   ingredients.push(ingredient1);
// }
// }

// function formatPrice(initialPrice) {
//   var priceTag = "$"
//   return priceTag + initialPrice
// };

// function decreasePrice (initialPrice) {
//   var sale = true;

//   if (sale === true) {
//     var salePrice = menuItem.price * .1
//     return menuItem.price - salePrice;

//   } else {
//     console.log(menuItem.price)
//   }
// };

// function createRecipe (title, ingredients, menuItemType) {

//   var recipe = {
//     title: title,
//     ingredients: ingredients,
//     type: menuItemType
//   };
//   return recipe;
// }

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
