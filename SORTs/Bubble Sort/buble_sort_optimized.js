//when our array is almost sorted
//будет в холостую проверять уже отсортированные значения

//optimized with noSwaps
function bubbleSort(array) {
    let noSwaps;
    for(var i = array.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i - 1; j++) {
            console.log(array, array[j], array[j+1]);
            if(array[j] > array[j+1]) {
                //SWAP
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;

    }
    return array
}
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));