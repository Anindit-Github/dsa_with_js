// Check if arr2 has all the squares of arr1 and of the same frequency 
// Naive approach
function same(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false
    }

    for(let i=0; i < arr1.length; i++) {
        const isPresentIndex = arr2.indexOf(arr1 ** 2)
        
        if (isPresentIndex !== -1) {
            return false
        }
        arr2.splice(isPresentIndex, 1)
    }
    return true
}

console.log(same([1,2,1],[1,4,1]))

// Better approach
//  Frequency Counter Pattern
function same1( arr1, arr2) {
    if(arr1.length !==  arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        if(!(frequencyCounter1[key ** 2] in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2] ) {
            return false
        }
    }
    return true;
}
