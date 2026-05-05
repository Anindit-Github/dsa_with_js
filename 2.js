// Anagram using frequency Counter method

function isAnagram(first, second) {
    let frequencyObj = {}
    
    for(let i = 0;i< first.length; i++) {
        frequencyObj[first[i]] = (frequencyObj[first[i]] || 0) + 1;       
    }

    for(let i = 0;i< second.length;i++) {
        if (!frequencyObj[second[i]]){
            return false
        }
        else {
            frequencyObj[second[i]] -= 1;
        }
    }
    return true
}