const items = ["AAA", "BBB", "CCC", "DDD"];

function removeItem(items, removable) {
  const updated = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== removable) {
      updated.push(items[i]);
    }
  }
  return updated;
}

console.log("removeItem() : ", removeItem(items, "BBB"));
// [ 'AAA', 'CCC', 'DDD' ]
