const developers = [
  {
    name: "Jeff",
    language: "php",
  },
  {
    name: "Ashley",
    language: "python",
  },
  {
    name: "Sara",
    language: "python",
  },
  {
    name: "Joe",
    language: "javascript",
  },
];

const aggregatred = developers.reduce((spectialities, developer) => {
  const count = spectialities[developer.language] || 0;
  return {
    ...spectialities,
    [developer.language]: count + 1,
  };
}, {});
console.log(aggregatred);
// { php: 1, python: 2, javascript: 1 }
