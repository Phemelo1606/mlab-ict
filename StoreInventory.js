/*
Part 1: IPO Statements
Overall Program

Input	The store's inventory dataset (inventory object containing item name, price, and quantity), plus the specific item name(s) and quantities the owner wants to look up, restock, or value.
Process	Look up an item's data, update stock quantities when new stock arrives, and calculate the monetary value of stock on hand.
Output	Item details for a lookup, an updated inventory dataset after restocking, and a calculated total value for a given item's stock.

Function 1: getItemDetails

Input	The inventory object, and the name of the item to look up (e.g. "mouse").
Process	Search the inventory object for the given item key, and extract its price and quantity.
Output	The item's details like price and quantity, or a message if the item doesn't exist.

Function 2: restockItem

Input	The inventory object, the name of the item to restock, and the new quantity value (e.g. 20).
Process	Locate the item in the inventory object and update its quantity (index 1 of its array) to the new value.
Output	The full, updated inventory object reflecting the new stock level.

Function 3: calculateInventoryValue

Input	The inventory object, and the name of the item to calculate.
Process	Retrieve the item's price and quantity, then multiply them together (price × quantity).
Output	The total monetary value of stock on hand for that item.
*/


//Part 2:  Practical Requirements

const inventory = {
  laptop: [999.99, 5],
  mouse: [25.00, 15],
  keyboard: [45.50, 0],
  monitor: [150.00, 8]
};

// Requirement 1: Item Lookup
function getItemDetails(inventory, itemName) {
  const [price, quantity] = inventory[itemName] || [];

  if (price === undefined) {
    return `Item "${itemName}" not found in inventory.`;
  }

  return { item: itemName, price, quantity };
}


console.log(getItemDetails(inventory, "mouse"));


console.log(getItemDetails(inventory, "printer"));




// Requirement 2: Inventory Restocking
function restockItem(inventory, itemName, newQuantity) {
  const [price] = inventory[itemName] || [];

  if (price === undefined) {
    console.log(`Item "${itemName}" not found in inventory.`);
    return inventory;
  }

  inventory[itemName][1] = newQuantity; // index 1 = quantity
  return inventory;
}


console.log(restockItem(inventory, "keyboard", 20));



// Requirement 3: Inventory Valuation
function calculateInventoryValue(inventory, itemName) {
  const [price, quantity] = inventory[itemName] || [];

  if (price === undefined) {
    return `Item "${itemName}" not found in inventory.`;
  }

  return price * quantity;
}


console.log(calculateInventoryValue(inventory, "monitor"));
