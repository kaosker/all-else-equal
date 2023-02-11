function allElseEqual(arr) {
    let arrCount = 0;

    for (let i = 0; i < arr.length; i++) { // count array nums
        arrCount += arr[i];
    }




    for (let i = 0; i < arr.length; i++) { // iterate through array
        let divideArrCount = arrCount / 2; // here we half array

        if (arr[i] == divideArrCount) { // if currentArray is equal to half of total array return true;
            return arr[i];
        }
    }
    return null;
};




console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
