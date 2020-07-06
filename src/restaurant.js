// function is createRestaurant
//want to push string "sexy pizza"
//"sexy pizza" needs to be assigned to pizzaRestaurant.name
function createRestaurant (name) {
  food= {
    name : name,
    menus : {
      breakfast: [],
      lunch: [],
      dinner: []
  }
};
  return food;
}

// create function addMenuItem
//add item to lunch menus
//identify menuItem.type
// IF restaurant menus item type does not include addMenuItem
// Push menuItem into menus
function addMenuItem (restaurant, menuItem) {
  if (!restaurant.menus[menuItem.type].includes(menuItem)){
    restaurant.menus[menuItem.type].push(menuItem)
  };
}
//remove item from menu to update
// able to access menus items individually
//remove bacon and eggs pizza from breakfast
//log string no one is eating our bacon and eggs pizza- it has been removed from the breakfast menu
// log interpolation [no one is eating....[menus.name]- it has been removed from [menus.type]]
//similar functions for dinner

// only remove a menu item if it is on the menus
// have to check if menuItem is on menus.
//IF menuItem is on menus, then run code to removed
// ELSE alert. error message
// message - interpolation sorry we dont sell [menuItem], try adding a new recipe

function removeMenuItem (restaurant, item, type) {
  for (var i = 0; i <= restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name === item) {
        restaurant.menus[type].splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${type} menu\!`
      }

    }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  };




module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
