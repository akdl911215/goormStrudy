const items = ["AAA", "BBB", "CCC", "DDD"];

function removeItem(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}
console.log("removeItem() : ", removeItem(items, "BBB"));
// [ 'AAA', 'CCC', 'DDD' ]
