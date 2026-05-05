//Sliding Window Pattern

// Ex: Find longest sequence of unique characters  

// Ex2: Max Sum of n digits next to one another maxSubArraySum([1,2,5,2,8,1,5], 2) //10



function maxSubarraySum(arr, num) {

    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i= 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j=0; j < num; j++){
            temp += arr[i+j];

        }
        if(temp >  max) {
            max = temp;
        }
    }
    return max;
}