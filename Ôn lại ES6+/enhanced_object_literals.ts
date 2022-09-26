/* 
    -	Định nghĩa key: value cho object
    -	Định nghĩa method cho object
    -	Định nghĩa key cho object dưới dạng biến

*/
var nameCourse:string = 'TypeScript';
var price:number = 1000;

let course = {
    nameCourse,
    price,
    getName() {
        return this.nameCourse;
    }
};
console.log(course);
console.log(course.getName());

var fieldName:string = 'name';
var fieldPrice:string = 'price';

let course1 = {
    [fieldName]: 'ReactJS',
    [fieldPrice]: 1000
}

console.log(course1);
export {};