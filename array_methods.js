const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 3, name: 'quq', price: 13 }
  ];

const name = prompt(
    "Please enter a name for the requested item",
    "foo"
);

const found = items.find(item => item.name === name);
if(found) {
    console.log("we found the item");
    console.log(found);
} else {
    console.log("we couldn't find the item with the name " + name);
}

const search = prompt(
    "enter a string we can use to discover if any itme ahs that string in their name",
    "ba"
);

const foundItems = items.filter(item => item.name.indexOf(search) !== -1);
console.log(foundItems);

const keyForMapping = prompt(
    "choose a key, either id, name, or price so we can use map to display the values for that key",
    "id"
);

const mappedValues = items.map(item => item[keyForMapping]);
console.log("Mapped Values", mappedValues);

const keyForReducing = prompt(
    "choose a key, either id, or price so we can use reduce to sum up the values for that key",
    "price"
);

const reduction = items.reduce((acc, item)=> {
    acc = acc + item[keyForReducing];
    return acc;
}, 0);
console.log(reduction);