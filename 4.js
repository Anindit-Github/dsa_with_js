// Implement countUniqueValues -> accepts sorted array -> counts unique values in the array
// There can be negative numbers in the array

//countUniqueValues([1,1,1,1,1,2]) //2
//countUniqueValues([]) //0

function countUniqueValues(arr) {
    let i = 0;
    //let j = 1;
    if(arr.length == 0) 
        return 0;

    for(let j = 1; j< arr.length; j++) {
        if(arr[j] === arr[i])
            continue;
        else {
            i+=1;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

