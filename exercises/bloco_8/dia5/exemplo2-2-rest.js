const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

console.log(sum(4, 7, 13 ,21, 55, 75, 100, 40))