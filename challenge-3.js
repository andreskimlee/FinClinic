// Take a list of integers and find the common digit? 
// Create a file using any language(javascript preferred but not required) 
// and name it challenge-3.
// Array of number [11232, 1712, 2311] common digits = [1, 1, 2] 
// (if a digit occurs x times in all numbers, 
//     you need to include that digit x times in your answer)  

const findCommonDigits = arr => {
    let commDigits = [];
    let intCount = {}

    // create a set which returns unique keys only.
    let allInts = new Set();
    arr.forEach(ele => {
        ele.toString().split("").forEach(int => {
            allInts.add(int)
        })
    })

    // iterate over our original array and the set which will modify our intCount dictionairy. This Dictionairy will store the set's key
    // to the occurence at the current iteration. If the occurrence is less than the previous than it will replace the previous occurence count. 
    // This is to ensure that each integer has a shared occurence for the common digits. IntCount will look like this for the given example above
    // { '1': 2, '2': 1, '3': 0, '7': 0 }
    arr.forEach(ele1 => {
        allInts.forEach(ele2 => {
            if (ele2 in intCount) {
                let newVal = Math.min(intCount[ele2], returnOccurence(ele1, ele2))
                intCount[ele2] = newVal
            } else {
                intCount[ele2] = returnOccurence(ele1, ele2)
            }
        })

    })


    // iterate over our keys while keying into the the dictionairy formed above. 
    // Then we push into an array while the count of occurence is greater than 0. 
    Object.keys(intCount).forEach(num => {
        while (intCount[num] > 0) {
            commDigits.push(num)
            intCount[num] -= 1
        }
    })

    // return the array 
    return commDigits

}

// helper function that returns the occurence of a integer within a given larger number
const returnOccurence = (wholeNum, num) => {
    wholeNum = wholeNum.toString();
    num = num.toString();
    counter = 0;
    wholeNum.split("").forEach(ele => {
        if (num === ele) {
            counter += 1;
        }
    })

    return counter;
}

findCommonDigits([11232, 1712, 2311])

