const items = ["AAA", "BBB", "CCC", "DDD"];

function removeItem(items, removable) {
  const index = items.indexOf(removable);
  items.splice(index, 1);
  return items;
}

console.log("removeItem() : ", removeItem(items, "BBB"));
// ['AAA', 'CCC', 'DDD' ]
console.log("items : ", items);
// [ 'AAA', 'CCC', 'DDD' ]
