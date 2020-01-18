//divide and conquer search 15
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ]
//  | left                          |too small                      |right
//                                    [12, 13, 14, 15, 16, 17, 18, 19 ]
//                                      |left               |too big         |right

function binarySearch(array, value) {
    var start = 0;
    var end = array.length - 1;
    var middle = Math.floor((start + end) / 2);
    console.log(start, middle, end);
    while(array[middle] !== value) {
        if (array[middle] > value) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(array[middle] == value) {
        return middle
    }
    return -1

}

//O(log n) - worst and average
//O(1) - best case