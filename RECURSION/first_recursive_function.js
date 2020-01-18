function countDown(num) {
    if(num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

function countDownWithoutRecursion(num) {
    for(var i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All Done!!")
}


comsole.log(countDown(10));
console.log(countDownWithoutRecursion(10));