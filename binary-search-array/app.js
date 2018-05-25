// Implement Binary search on a sorted array.
// function binarySearch(arr, val)


let sampleArray = [3, 4, 7, 8, 11, 14, 15, 23, 30, 40, 45, 60, 66, 91, 99, 100, 123, 432, 2323, 4991, 5353]


function binarySearchIterative(arr, val) {
    while (arr.length > 0) {
        let middleIndex= Math.floor(arr.length/2);
        
        if (arr[middleIndex] === val) {
            return true;
        }
        else {
            if (val < arr[middleIndex]) {
                arr = arr.slice(0, middleIndex);
            }
            else {
                arr = arr.slice(middleIndex);
            }
        }
    }
    
    return arr[0] === val;
}

function binarySearchRecursive(arr, val) { 
    let middleIndex = Math.floor(arr.length/2);

    if (arr[middleIndex] === val) {
        return true;
    } 

    if (arr.length === 0 || arr.length === 1) {
        return false;
    }

    
    if (val < arr[middleIndex]) {
        return binarySearchRecursive(arr.slice(0, middleIndex),  val);
    }
    if (val > arr[middleIndex]) {
        return binarySearchRecursive(arr.slice(middleIndex), val)
    }

}

let search = 3;
console.log(binarySearchRecursive(sampleArray, search));
console.log(binarySearchIterative(sampleArray, search));
