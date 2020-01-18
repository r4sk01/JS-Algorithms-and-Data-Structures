// function bubbleSort(array) {
//     for(var i = 0; i < array.length; i++) {
//         for(var j = 0; j < array.length; j++) {
//             console.log(array, array[j], array[j+1]);
//             if(array[j] > array[j+1]) {
//                 //SWAP
//                 var temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//
//     }
//     return array
// }
// console.log(bubbleSort([30, 2, 17, 7, 8, 70]));

function bubbleSort(array) {
    for(var i = array.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {
            console.log(array, array[j], array[j+1]);
            if(array[j] > array[j+1]) {
                //SWAP
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }

    }
    return array
}
console.log(bubbleSort([30, 2, 17, 7, 8, 70]));