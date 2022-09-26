const logger = (log: string) => console.log(log);
logger('Message...');

const sum = (a: number, b:number) => a+b;
console.log(sum(2,5));

const obj = (a:number, b:number) => ({a:a, b:b});
console.log(obj(2,5));

// arrow function không thể dùng để tạo 1 constructor