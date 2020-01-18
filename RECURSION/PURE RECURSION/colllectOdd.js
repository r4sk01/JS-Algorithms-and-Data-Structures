function collectOddValues(array) {
    let newArr = [];

    if (array.length === 0) {
        return newArr;
    }

    if(array[0] % 2 !== 0) {
        newArr.push(array[0]);
    }

    newArr = newArr.concat(collectOddValues(array.slice(1)));
    return newArr;
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))