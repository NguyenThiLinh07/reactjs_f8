// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object

const infoArr:any[] = [
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
];

const arrToObj = (arr: any[]) => arr.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc;
}, {});

console.log(arrToObj(infoArr));