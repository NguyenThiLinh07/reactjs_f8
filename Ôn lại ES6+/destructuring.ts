var array:string[] = ['Javascript', 'PHP', 'Ruby']

var [a,,c]:string[] = array;
console.log(a, c);

var [a, ...rest]:string[] = array;
console.log(a);
console.log(rest);

let course = {
    namez: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
};

let {namez, ...newObject} = course;
console.log(namez);
console.log(newObject);

let {namez: parentName, children: {name: childrenName}} = course;
console.log(parentName);
console.log(childrenName);


function logger(...params:number[]) {
    console.log(params);
}

console.log(logger(1,2,3,4,5));

function logger1([a, b, ...rest]:number[]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger1([1, 2, 1, 8, 9, 12, 4, 5, 4]);
export {};