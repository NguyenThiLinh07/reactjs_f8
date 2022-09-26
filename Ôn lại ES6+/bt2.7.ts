// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object
type Result = {
    [index: string]: number|string;
}

const infoArr:((number|string)[])[] = [
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
];

const arrToObj = (arr:((number|string)[])[]) => arr.reduce((acc:Result, cur:(number|string)[]) :Result=> {
        console.log(acc);
        return {...acc, [cur[0]]:cur[1]}
}, {});

console.log(arrToObj(infoArr));