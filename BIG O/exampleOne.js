//Suppose we want to write a function that calculates the sum of all
//numbers from 1 up to (and including) some number n.

//solution 1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(6))

//solution 2
function addUpToTwo(n) {
    return n * (n+1)/2;
}

console.log(addUpToTwo(6))


//instead of counting execution time lets just count number of simple operations

//in solution 2
// 1 multiplication
// 1 sum
// 1 division
// Total: 3
// O(1) is constant

//in solution 1
// n += -> n sum, n assignments
// n i++ -> n sum, n assignments
// 1 assignment for total
// 1 assignment for i=1
// n comparison
// Total: 5n+2
//O(n) or O(5n+2)

//objects
let instructor = {
    firstname: 'Kelly',
    isInstructor: true,
    favouriteNumbers: [1,2,3,4]
}
//insertion 0(1)
//removal 0(1)
//searching 0(1)
//access 0(1)

//ARRAYS ARE ORDERED LISTS
let names= ['Michael', 'Melissa', 'Andreana'];
let values= [true, {}, [], 2, 'awesome'];

//array operations
//push 0(1)
//pop O(1)
//shift O(n)
//unshift O(n)
//concat O(n)
//slice O(n)
//splice O(n)
//sort O(n*log n)
//forEach/map/filter/reduce/etc... O(n)