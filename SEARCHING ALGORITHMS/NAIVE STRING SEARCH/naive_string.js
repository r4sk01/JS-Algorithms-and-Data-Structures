//harold said hah in hamburg
// check 'haha'? how?
//long string wowomgzomg
// short string omg

//step 1
// wowomgzomg
// omg  No

//step 2
//wowomgzomg
// omg o-yes m-no

//step 3
//wowomgzomg
//  omg

//step 4
//wowomgzomg
//   omg increment match +1

function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) {
                console.log('BREAK!')
                break;
            }
            if (j === short.length - 1) {
                console.log("FOUND ONE!")
                count++;
            }
        }
        return count;
    }

}